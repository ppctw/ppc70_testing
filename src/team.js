'use strict';
 
const e = React.createElement;

class Team_component extends React.Component {
    
    constructor(props) {
        super(props);
          this.state = { name: "ch1_1.png".date, enName:"enName" };
      }
  render( ) {
 
    return (
        <div class="span3">         
            <div class="our_team">
              <img
               src={`${this.props.imgUrl}`} 
                alt="team name" />
              <div class="pro_detail">
                <h3 class="pro_name">{this.props.title}</h3>
                <span class="pro_desc">{this.props.description}</span>
                
              </div>
            </div>
          </div>
      );
  }
}
 

  document.querySelectorAll('.team_component')
  .forEach(domContainer => {
 
    // Read the comment ID from a data-* attribute.
    const title =  domContainer.dataset.title;
    const description = domContainer.dataset.description;
    const imgUrl = domContainer.dataset.imgurl;
    const linkUrl = domContainer.dataset.linkurl;
      // console.log("domContainer",domContainer.dataset) 
    const root = ReactDOM.createRoot(domContainer);
    root.render( e(Team_component, { title: title,description:description,imgUrl:imgUrl,linkUrl:linkUrl})); 
  });
 
 
  {/* const root = ReactDOM.createRoot(document.getElementById('columnThree_component'));
 
root.render( e(ColumnThree_component, { nameAuth: "123" }));   */}

