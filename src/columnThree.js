'use strict';
 
const e = React.createElement;

class ColumnThree_component extends React.Component {
    
    constructor(props) {
        super(props);
          this.state = { name: "ch1_1.png".date, enName:"enName" };
      }
  render( ) {
 
    return (
      <a href={`${this.props.linkUrl}`}> 
        <div  class="column-4 column-md-6 column-xs-12   box-tab">        
          <div class="effect effect-ten" data-aos="zoom-in-left">
            <img         
              src={`${this.props.imgUrl}`} 
              class="img-fluid " />
            <div class="tab-text">
              <h2>{this.props.title}</h2>
              <p class="pt-3 ">{this.props.description}</p>           
            </div>
          </div>       
        </div>
      </a>
      );
  }
}
 

  document.querySelectorAll('.columnThree_component')
  .forEach(domContainer => {
 
    // Read the comment ID from a data-* attribute.
    const title =  domContainer.dataset.title;
    const description = domContainer.dataset.description;
    const imgUrl = domContainer.dataset.imgurl;
    const linkUrl = domContainer.dataset.linkurl;
      // console.log("domContainer",domContainer.dataset) 
    const root = ReactDOM.createRoot(domContainer);
    root.render( e(ColumnThree_component, { title: title,description:description,imgUrl:imgUrl,linkUrl:linkUrl})); 
  });
 
 
  {/* const root = ReactDOM.createRoot(document.getElementById('columnThree_component'));
 
root.render( e(ColumnThree_component, { nameAuth: "123" }));   */}

