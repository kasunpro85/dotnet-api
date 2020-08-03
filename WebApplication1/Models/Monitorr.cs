using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Monitorinfo
    {
        List<Monitorr> monitorInfo { get; set; }
    }
    public class Monitorr
    {
        public int ID { get; set; }
        public string Content { get; set; }
        public DateTime DateTime { get; set; }
    }
}