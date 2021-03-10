import React from 'react'
import '../css/App.css'
import '../css/reset.css'
import '../css/style.css'

function CreateProduct(proms) {
        const MainPart = proms.posts.map((Pr) =>
          <div key={Pr.No}>
            <p>{Pr.Desc}</p>
       
                  <article className ="product">
			
                        <img src={Pr.img} alt="Product Image"></img>
                        <h3>{Pr.NameProduct}</h3>
                        <data value="39"><del>{Pr.del}</del> <ins>{Pr.ins}</ins></data>
                        
                        <dl>
                              <dt>Rating</dt>
                              <dt>{Pr.rating}</dt>
                        </dl>

                        <a href="#">see more</a>
                      
                </article>

                <form>
			  <fieldset>
                                <legend>Colours</legend>
				<div id="Colorproduct"> </div>                                  
			  </fieldset>
                          
			  <fieldset>
				<legend>Sizes</legend>
                                <div id="Sizeproduct"> </div>  
			 </fieldset>
		</form>                

          </div>
        );
        return (
          <div>
            {MainPart}
          </div>
        );
      }
      
      const Products = [
        {No: 1,img : 'src/img/product.jpg' ,NameProduct: 'Shoe-1',del : 120 , ins : 110, rating : 4.5 , Desc: 'HighQuality Shoe'},
        {No: 2,img : 'src/img/product.jpg' ,NameProduct: 'Shoe-2',del : 150 , ins : 160, rating : 3.5 , Desc: 'Best Shoe'},
        {No: 3,img : 'src/img/product.jpg' , NameProduct: 'T-Shirt',del : 150 , ins : 160, rating : 3.8 , Desc: 'HighQuality-Tshirt'}       
      ];
     
const App = () => {
	return <div>
        <CreateProduct posts={Products}/>
     </div>
}

export default App
