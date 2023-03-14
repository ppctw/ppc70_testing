'use strict';
 
const e = React.createElement;

class GridLeft_component extends React.Component {
    
    constructor(props) {
        super(props);
          this.state = { name: "ch1_1.png".date, enName:"enName" };
      }
  render( ) {
 
    return (          
    <div class="container pt-5"   >
      <div class="align-items-center justify-content-center text-center" >
        <div class=" span8 ">
          <div  >
            <div
              class="bordered spacebot text-secondary">          
              <h1 class="text-left" >{this.props.title}</h1>
              <div class=" pt-3 text-left">
                {this.props.description}
              </div>
            </div>
          
          </div>
        </div>     
      </div>
      <div class="span3"> <img
          src={this.props.imgUrl}
          class="img-polaroid span4"
          alt="img1"
        />
        </div>
    </div>     
      );
  }
}
 

  document.querySelectorAll('.gridLeft_component')
  .forEach(domContainer => {
 
    // Read the comment ID from a data-* attribute.
    const title =  domContainer.dataset.title;
    const description = domContainer.dataset.description;
    const imgUrl = domContainer.dataset.imgurl;
      // console.log("domContainer",domContainer.dataset) 
    const root = ReactDOM.createRoot(domContainer);
    root.render( e(GridLeft_component, { title: title,description:description,imgUrl:imgUrl})); 
  });
 
 
  {/* const root = ReactDOM.createRoot(document.getElementById('columnThree_component'));
 
root.render( e(ColumnThree_component, { nameAuth: "123" }));   */}

