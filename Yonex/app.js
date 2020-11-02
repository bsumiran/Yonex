const dropdownContent=document.querySelector(".dropdown-content");
const dropDown=document.querySelector(".dropdown")

const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: "eikfyufnb4e1",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: "Tf8n7TibfQjyxTKu0BYPRpI-icIlkSNba3JICuNXfhE"
  });

  class Products{
    async  getProducts(){
        
        try {
     
      
            let contentful=await client.getEntries({
                content_type: 'racquets'
              });
             
             console.log(contentful);
             
             let products=contentful.items;
             products=products.map((item)=>{
                 const {id,name,category}=item.fields;
                 const image=item.fields.image.fields.file.url;
                 
                console.log(id,name,category);
                 // return{id,name,category,image}
              })
             // return products;
        } catch (error) {
            console.log(error);
        }
      }
  
  }

  class UI{
      displayProducts(products){
          let result="";
          products.map(product=>{
              result=`  <div class="dropdown-content">
              <a href="#">${product.name} </a>
              
          </div> `
          })     
          dropDown.appendChild(result)    
      }
  }

document.addEventListener("DOMContentLoaded",function(){
    const products=new Products();
    const ui=new UI();
    
    products.getProducts().then(products => {
        ui.displayProducts(products);
    })
} )
            
           