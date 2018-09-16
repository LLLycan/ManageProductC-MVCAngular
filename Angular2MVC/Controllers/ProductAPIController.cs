using Angular2MVC.DBContext;
using System.Data.Entity;
using System.Linq;
using System.Net.Http;
using System.Web.Http;

namespace Angular2MVC.Controllers
{
    public class ProductAPIController : BaseAPIController
    {
        public HttpResponseMessage Get()
        {
            return ToJson(ProductDB.Products.AsEnumerable());
        }

       public HttpResponseMessage Post([FromBody]Product value)
        {
            ProductDB.Products.Add(value);             
            return ToJson(ProductDB.SaveChanges());
        }

        public HttpResponseMessage Put(int id, [FromBody]Product value)
        {
            ProductDB.Entry(value).State = EntityState.Modified;
            return ToJson(ProductDB.SaveChanges());
        }
        public HttpResponseMessage Delete(int id)
        {
            ProductDB.Products.Remove(ProductDB.Products.FirstOrDefault(x => x.ProductId == id));
            return ToJson(ProductDB.SaveChanges());
        }
    }
}
