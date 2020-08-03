
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Mail;
using System.Text;

using System.Threading.Tasks;
using WebApplication1;
using WebApplication1.Models;

namespace FunctionApp1
{
    public class ApplicationService
    {
        private SqlConnection con;
        public List<Monitorr> LoadList()
        {

            try {

                connection();
                List<Monitorr> monitor =GetAllEmployees();
                return monitor;

            } catch(Exception ex)
            {
                throw ex;
            }
            //string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["ConnectionStringName"].ConnectionString;


            //IDataService dataService = DataServiceBuilder.CreateDataService(connectionString);
            //try
            //{
            //    dataService.BeginTransaction();
            //    DataService ds = new DataService(dataService);
            //    List<Monitor> result = ds.LoadList();


            //    dataService.CommitTransaction();

            //    return result;
            //}
            //catch (Exception)
            //{
            //    throw;
            //}
            //finally { dataService.Dispose(); }
        }
        
        //To Handle connection related activities    
        private void connection()
        {
            string constr = System.Configuration.ConfigurationManager.ConnectionStrings["ConnectionStringName"].ConnectionString;
            con = new SqlConnection(constr);

        }
        public List<Monitorr> GetAllEmployees()
        {
            connection();
            List<Monitorr> monitor = new List<Monitorr>();

            //SqlCommand com = new SqlCommand("[dbo].[LoadTest]", con);
            //com.CommandType = CommandType.StoredProcedure;
            //SqlDataAdapter da = new SqlDataAdapter(com);
            //DataTable dt = new DataTable();

            //con.Open();
            //da.Fill(dt);
            //con.Close();
            ////Bind EmpModel generic list using dataRow     
            //foreach (DataRow dr in dt.Rows)
            //{

            //    monitor.Add(
            //        new Monitorr
            //        {
            //            ID = Convert.ToInt32(dr["ID"]),
            //            Content = Convert.ToString(dr["Content"]),
            //            DateTime = Convert.ToDateTime(dr["DateTime"]),
            //        });
            //}
            return monitor;
        }
    }
         
}
