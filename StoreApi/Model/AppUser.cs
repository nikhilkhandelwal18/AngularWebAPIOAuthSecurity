using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace StoreApi.Model
{
  [Table("User", Schema = "Security")]
  public partial class AppUser
  {
      [Required]
      [Key()]
      public Guid UserId { get; set; }

    [Required]
    [StringLength(255)]
     public string UserName { get; set; }

    [Required]
    [StringLength(255)]
    public string Password { get; set; }
  }
}