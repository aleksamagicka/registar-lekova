using CsvHelper;
using CsvHelper.Configuration;
using System.Globalization;
using System.Net;
using System.Text;

namespace diplomskirad.Data;

public static class SeedData
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using var context = serviceProvider.GetRequiredService<ApplicationDbContext>();
        if (context.Lekovi.Any())
        {
            return;   // DB has been seeded
        }

        var config = new CsvConfiguration(CultureInfo.InvariantCulture)
        {
            Delimiter = ";",
            Quote = '"',
            BadDataFound = null,
            HasHeaderRecord = false
        };

        var csvContents = WebUtility.HtmlDecode(new StreamReader("lekovi_humani.csv", Encoding.UTF8).ReadToEnd());

        using (var csv = new CsvReader(new StringReader(csvContents), config))
        {
            csv.Context.RegisterClassMap<LekMap>();
            var records = csv.GetRecords<Lek>().ToList();
            context.Lekovi.AddRange(records);
        }
        context.SaveChanges();
    }
}