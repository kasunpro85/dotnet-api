using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class RegisterController : Controller
    {
        // GET: Register
        //public ActionResult Index()
        //{
        //    return View();
        //}
       
        [HttpPost]
        public ActionResult Index()
        {
            Random rand = new Random();
            DateTime date = DateTime.Now;
            double dDate = date.ToOADate();
            return Json(new
            {
                monitors = rand.Next(0, 1000),
                graceTime = dDate, 
                pollingTime = date.Second, // secconds in frequesncy 
                isActive =true,
            });
        }
    }
}