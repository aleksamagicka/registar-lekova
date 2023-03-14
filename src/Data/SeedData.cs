using CsvHelper;
using CsvHelper.Configuration;
using System.Globalization;
using System.Net;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using RegistarLekova.Models;

namespace RegistarLekova.Data;

public static class SeedData
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using var context = serviceProvider.GetRequiredService<ApplicationDbContext>();
        if (context.Lekovi.Any())
        {
            return;   // DB has been seeded
        }

        InsertLekovi(context, new StreamReader("lekovi_humani.csv", Encoding.UTF8).ReadToEnd());

        using var userManager = serviceProvider.GetService<UserManager<ApplicationUser>>();
        CreateAdmin(userManager);
    }

    public static void InsertLekovi(ApplicationDbContext context, string csvContents, bool dropLekovi = false)
    {
        if (dropLekovi)
        {
            context.Database.ExecuteSqlRaw("TRUNCATE \"Lekovi\";");
        }

        csvContents = WebUtility.HtmlDecode(csvContents);

        var config = new CsvConfiguration(CultureInfo.InvariantCulture)
        {
            Delimiter = ";",
            Quote = '"',
            BadDataFound = null,
            HasHeaderRecord = false
        };

        using (var csv = new CsvReader(new StringReader(csvContents), config))
        {
            csv.Context.RegisterClassMap<LekMap>();
            var records = csv.GetRecords<Lek>().ToList();
            context.Lekovi.AddRange(records);
        }

        context.SaveChanges();
    }

    public static void CreateAdmin(UserManager<ApplicationUser> userManager)
    {
        var email = "admin@example.com";
        userManager.CreateAsync(new ApplicationUser { Email = email, EmailConfirmed = true, UserName = email },
            "Admin101@").Wait();
    }
}