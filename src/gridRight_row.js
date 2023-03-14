'use strict';
 
const e = React.createElement;

class GridRightRow_component extends React.Component {
    
    constructor(props) {
        super(props);
          this.state = { name: "ch1_1.png".date, enName:"enName" };
      }
  render( ) {
 
    return (
      <div class="container pt-5"   >
      <div class="row hide-md ">      
      <img
          src={this.props.imgUrl}
          class="img-polaroid span3"
          alt="img1"
        />
      <div class="align-items-center justify-content-center text-center" >
        <div class="col-12">
         
          <div  >
            <div
              class="bordered spacebot text-secondary">          
              <h1 class="text-left" >{this.props.title}</h1>
              <div class="span9 pt-3 text-left">
                {this.props.description}
              </div>
            </div>     
          </div>
        </div>
      </div> </div>
    </div>
      );
  }
}
 

  document.querySelectorAll('.gridRightRow_component')
  .forEach(domContainer => {
 
    // Read the comment ID from a data-* attribute.
    const title =  domContainer.dataset.title;
    const description = domContainer.dataset.description;
    const imgUrl = domContainer.dataset.imgurl;
      // console.log("domContainer",domContainer.dataset) 
    const root = ReactDOM.createRoot(domContainer);
    root.render( e(GridRightRow_component, { title: title,description:description,imgUrl:imgUrl})); 
  });
 
 
  {/* const root = ReactDOM.createRoot(document.getElementById('columnThree_component'));
 
root.render( e(ColumnThree_component, { nameAuth: "123" }));   */}

