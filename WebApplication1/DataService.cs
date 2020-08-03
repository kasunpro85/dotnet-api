
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Text;
using System.Linq;
using System.Data;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1
{
    public class DataService 
    {

        IDataService _dataService;

        public DataService(IDataService dataService)
        {
            _dataService = dataService;
        }

        public List<Monitorr> LoadList()
        {
            
            try
            {
                List<Monitorr> monitor = new List<Monitorr>();
                using (DbDataReader reader = _dataService.ExecuteReader("[dbo].[LoadTest]", null))
                {
                    while (reader.Read())
                    {
                        DataReader dataReader = new DataReader(reader);
                        Monitorr m = new Monitorr();
                        m.ID = dataReader.GetInt32("ID");
                        m.Content = dataReader.GetString("Content");
                        m.DateTime = dataReader.GetDateTime("DateTime");

                        monitor.Add(m);
                    }
                }
                return monitor;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

       
    }
}
