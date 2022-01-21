using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace missions.Models
{
    public class Grades
    {
        [Required]
        [Range(0, 100, ErrorMessage ="Stop that stuff")]
        public int Assignment { get; set; }

        [Required]
        [Range(0, 100)]
        public int Group_project { get; set; }

        [Required]
        [Range(0, 100)]
        public int Quiz { get; set; }

        [Required]
        [Range(0, 100)]
        public int Exam { get; set; }

        [Required]
        [Range(0, 100)]
        public int Intex { get; set; }
    }
}
