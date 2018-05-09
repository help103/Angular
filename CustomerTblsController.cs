using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using AngularVS.Models;

namespace AngularVS.Controllers
{
    public class CustomerTblsController : ApiController
    {
        private SampleDBEntities db = new SampleDBEntities();

        // GET: api/CustomerTbls
        public IQueryable<CustomerTbl> GetCustomerTbls()
        {
            return db.CustomerTbls;
        }

        // GET: api/CustomerTbls/5
        [ResponseType(typeof(CustomerTbl))]
        public IHttpActionResult GetCustomerTbl(long id)
        {
            CustomerTbl customerTbl = db.CustomerTbls.Find(id);
            if (customerTbl == null)
            {
                return NotFound();
            }

            return Ok(customerTbl);
        }

        // PUT: api/CustomerTbls/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCustomerTbl(long id, CustomerTbl customerTbl)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != customerTbl.CustomerID)
            {
                return BadRequest();
            }

            db.Entry(customerTbl).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerTblExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/CustomerTbls
        [ResponseType(typeof(CustomerTbl))]
        public IHttpActionResult PostCustomerTbl(CustomerTbl customerTbl)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CustomerTbls.Add(customerTbl);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = customerTbl.CustomerID }, customerTbl);
        }

        // DELETE: api/CustomerTbls/5
        [ResponseType(typeof(CustomerTbl))]
        public IHttpActionResult DeleteCustomerTbl(long id)
        {
            CustomerTbl customerTbl = db.CustomerTbls.Find(id);
            if (customerTbl == null)
            {
                return NotFound();
            }

            db.CustomerTbls.Remove(customerTbl);
            db.SaveChanges();

            return Ok(customerTbl);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CustomerTblExists(long id)
        {
            return db.CustomerTbls.Count(e => e.CustomerID == id) > 0;
        }
    }
}

 <httpProtocol> <customHeaders> <add name="Access-Control-Allow-Origin" value="*" /> <add name="Access-Control-Allow-Headers" value="Content-Type" /> <add name="Access-Control-Allow-Methods" value="GET, POST, PUT, DELETE, OPTIONS" /> </customHeaders> </httpProtocol>
