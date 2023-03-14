'use strict';
 
const e = React.createElement;

class ColumnFull_component extends React.Component {
    
    constructor(props) {
        super(props);
          this.state = { name: "ch1_1.png".date, enName:"3" };
          
      }
    
  render( ) {
 
    return (
      <div class="column-3  box-tab  ">
      <div class="effect grid-width3 effect-seven">
          <img         
            src={`${this.props.imgUrl}`} 
            class="img-fluid" />
          <div class="tab-text">
            <h2>{this.props.title}</h2>
            <p class="pt-5">{this.props.description}</p>           
          </div>
        </div>
      </div>         
    )
  }
}
 

  document.querySelectorAll('.columnFull_component')
  .forEach(domContainer => {
 
    // Read the comment ID from a data-* attribute.
    const title =  domContainer.dataset.title;
    const description = domContainer.dataset.description;
    const imgUrl = domContainer.dataset.imgurl;
    const columnValue = domContainer.dataset.columnValue;  
    // console.log("domContainer",domContainer.dataset)
    const root = ReactDOM.createRoot(domContainer);
    root.render( e(ColumnFull_component, { title: title,description:description,imgUrl:imgUrl,columnValue:columnValue})); 
  });
 
 
  {/* const root = ReactDOM.createRoot(document.getElementById('ColumnFull_component'));
 
root.render( e(ColumnFull_component, { nameAuth: "123" }));   */}

