#nullable disable

using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using RegistarLekova.Data;
using RegistarLekova.Models;

namespace RegistarLekova.Areas.Identity.Pages.Account.Manage;

public class UpdateDbModel : PageModel
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly ApplicationDbContext _context;

    public UpdateDbModel(
        UserManager<ApplicationUser> userManager,
        ApplicationDbContext context)
    {
        _userManager = userManager;
        _context = context;
    }

    [Display(Name = "CSV baza")]
    public IFormFile FormFile { get; set; }

    [TempData] public string StatusMessage { get; set; }

    public async Task<IActionResult> OnGetAsync()
    {
        var user = await _userManager.GetUserAsync(User);
        if (user == null) return NotFound($"Unable to load user with ID '{_userManager.GetUserId(User)}'.");

        return Page();
    }

    public async Task<IActionResult> OnPostUploadAsync(IFormFile formFile)
    {
        if (formFile.Length > 0)
        {
            string contents = await new StreamReader(formFile.OpenReadStream()).ReadToEndAsync();
            SeedData.InsertLekovi(_context, contents, true);
            StatusMessage = "Uspešno učitana nova baza!";
            return RedirectToPage();
        }

        return BadRequest();
    }
}