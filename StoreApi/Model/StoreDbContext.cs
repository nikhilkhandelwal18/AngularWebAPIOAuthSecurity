using Microsoft.EntityFrameworkCore;

namespace StoreApi.Model
{
  public class StoreDbContext : DbContext
  {
    public DbSet<Product> Products { get; set; }
    public DbSet<Category> Categories { get; set; }

    // private const string CONN =
    //               @"Server=Localhost;
    //                 Database=PTC-Pluralsight;
    //                 Trusted_Connection=True;
    //                 MultipleActiveResultSets=true";

    private const string CONN = @"Server=(localdb)\MSSQLLocalDB;
    Database=PTC-Pluralsight;
    AttachDbFilename=D:\Nikhil\AngularSecurity\SqlData\PTC-Pluralsight.mdf;
    MultipleActiveResultSets=true";

    protected override void OnConfiguring(
                DbContextOptionsBuilder optionsBuilder)
    {
      optionsBuilder.UseSqlServer(CONN);
    }
  }
}
