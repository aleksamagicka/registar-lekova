using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace RegistarLekova.Migrations
{
    /// <inheritdoc />
    public partial class LekModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Lekovi",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    VrstaResenja = table.Column<string>(type: "text", nullable: false),
                    NazivLeka = table.Column<string>(type: "text", nullable: false),
                    INN = table.Column<string>(type: "text", nullable: false),
                    RezimReizdavanja = table.Column<string>(type: "text", nullable: false),
                    OblikDoza = table.Column<string>(type: "text", nullable: false),
                    BrojResenja = table.Column<string>(type: "text", nullable: false),
                    DatumResenja = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    DatumVazenjaResenja = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Proizvodjac = table.Column<string>(type: "text", nullable: false),
                    NosilacDozvole = table.Column<string>(type: "text", nullable: false),
                    ATC = table.Column<string>(type: "text", nullable: false),
                    EAN = table.Column<string>(type: "text", nullable: false),
                    JKL = table.Column<string>(type: "text", nullable: false),
                    Vrsta = table.Column<string>(type: "text", nullable: false),
                    SifraProizvoda = table.Column<string>(type: "text", nullable: false),
                    SifraProizvodjacaUSaradnji = table.Column<string>(type: "text", nullable: false),
                    OblikSaradnje = table.Column<string>(type: "text", nullable: false),
                    SifraProizvodjaca = table.Column<int>(type: "integer", nullable: false),
                    SifraNosiocaDozvole = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lekovi", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Lekovi");
        }
    }
}
