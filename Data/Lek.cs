using CsvHelper.Configuration;

namespace diplomskirad.Data
{
    public class Lek
    {
        public int Id { get; set; }
        public string VrstaResenja { get; set; }
        public string NazivLeka { get; set; }
        public string INN { get; set; }
        public string RezimReizdavanja { get; set; }
        public string OblikDoza { get; set; }
        public string BrojResenja { get; set; }
        public DateOnly DatumResenja { get; set; }
        public DateOnly DatumVazenjaResenja { get; set; }
        public string Proizvodjac { get; set; }
        public string NosilacDozvole { get; set; }
        public string ATC { get; set; }
        public string EAN { get; set; }
        public string JKL { get; set; }
        public string Vrsta { get; set; }
        public string SifraProizvoda { get; set; }
        public string SifraProizvodjacaUSaradnji { get; set; }
        public string OblikSaradnje { get; set; }
        public string SifraProizvodjaca { get; set; }
        public string SifraNosiocaDozvole { get; set; }
    }

    public sealed class LekMap : ClassMap<Lek>
    {
        public LekMap()
        {
            Map(f => f.Id).Ignore();
            Map(f => f.VrstaResenja).Index(0);
            Map(f => f.NazivLeka).Index(1);
            Map(f => f.INN).Index(2);
            Map(f => f.RezimReizdavanja).Index(3);
            Map(f => f.OblikDoza).Index(4);
            Map(f => f.BrojResenja).Index(5);
            Map(f => f.DatumResenja).Index(6);
            Map(f => f.DatumVazenjaResenja).Index(7);
            Map(f => f.Proizvodjac).Index(8);
            Map(f => f.NosilacDozvole).Index(9);
            Map(f => f.ATC).Index(10);
            Map(f => f.EAN).Index(11);
            Map(f => f.JKL).Index(12);
            Map(f => f.Vrsta).Index(13);
            Map(f => f.SifraProizvoda).Index(14);
            Map(f => f.SifraProizvodjacaUSaradnji).Index(15);
            Map(f => f.OblikSaradnje).Index(16);
            Map(f => f.SifraProizvodjaca).Index(17);
            Map(f => f.SifraNosiocaDozvole).Index(18);
        }
    }
}
