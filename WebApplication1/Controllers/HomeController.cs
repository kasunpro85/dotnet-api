using FunctionApp1;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
      // GET: Home
        public ActionResult Index()
        {
            fillData();
            return View(fillData());
        }

        List<Monitorr> fillData()
        {
            ApplicationService obj = new ApplicationService();
            List<Monitorr> monitor = obj.LoadList();
            
            return monitor;
        }
        private void TimerElapsed(object o)
        {
            // Do stuff.
        }
    }
}