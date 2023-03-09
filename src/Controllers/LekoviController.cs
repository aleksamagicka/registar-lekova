using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RegistarLekova.Data;

namespace RegistarLekova.Controllers;

[ApiController]
[Route("[controller]")]
public class LekoviController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public LekoviController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IEnumerable<Lek>> Get()
    {
        return await _context.Lekovi.ToListAsync();
    }
}