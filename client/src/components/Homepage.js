import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Homepage extends Component {
    render() {
        const divStyle = {
            contentAlign: 'center',
            width:'75%',
            margin: 'auto',
            border: '5px solid pink',
            textAlign: 'center'
          };
          const titleStyle = {
            contentAlign: 'center',
            margin: 'auto',
            border: '5px solid pink',
            textAlign: 'center'
          };

          const pStyle = {
            margin: 'auto',
            textAlign: 'center',
            width: '50%'
          };

        return (
            <div>

               <section style={titleStyle}>
               <h1>DATE BOOK</h1> <h2 style={titleStyle}>...a site to share great places to get to know someone</h2>
               </section>
               <section style={divStyle}>
               <Link to='/locations'>
               locations
               </Link><br/>
               <Link to='/members'>
               members
               </Link>
               </section>
               <p style={pStyle}>
                   <h3>Welcome to Date Book. Here, you can post cool and unique places you've been that you think would be a great spot to take a date! </h3> 
                   <p>
                   Lorem ipsum dolor amet art party roof party trust fund gentrify godard chicharrones farm-to-table waistcoat irony tacos brooklyn blue bottle tumeric. Umami austin mixtape cornhole 3 wolf moon, PBR&B hammock artisan venmo helvetica craft beer asymmetrical knausgaard tattooed yuccie. Butcher air plant pickled etsy, yuccie tacos hella tumblr adaptogen pabst jianbing umami iPhone. Trust fund freegan tousled selvage raw denim. Taxidermy kale chips man braid VHS, disrupt tbh flexitarian raw denim put a bird on it. Gluten-free cred occupy, selfies kale chips hella polaroid.

Post-ironic four dollar toast selvage lomo. Street art tacos man braid adaptogen hot chicken fixie subway tile ugh glossier echo park hexagon man bun. Direct trade viral hell of green juice vegan. Man bun skateboard locavore schlitz prism, chambray farm-to-table tacos flannel activated charcoal vaporware banjo plaid. Street art try-hard hexagon marfa cray master cleanse. Woke marfa everyday carry thundercats, fingerstache pinterest humblebrag quinoa hella salvia.

Master cleanse drinking vinegar austin synth, activated charcoal swag asymmetrical occupy 3 wolf moon tilde tumeric. Poutine intelligentsia live-edge roof party chia trust fund photo booth craft beer 8-bit art party raclette health goth tote bag cardigan pour-over. Taxidermy brunch wayfarers knausgaard fashion axe hot chicken. Organic single-origin coffee subway tile kickstarter, letterpress live-edge master cleanse selfies. Deep v prism chambray, poutine affogato keytar pop-up cray taiyaki whatever.
                   </p>
               </p>
            </div>
        );
    }
}

export default Homepage;