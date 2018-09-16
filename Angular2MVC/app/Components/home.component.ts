import { Component } from "@angular/core";

@Component({
    template: `<h1>Coding Exercise - Product Management Tool by C#, MVC, Angular</h1>
                <div class="row">
                    <h4>Simple web application to manage products which including below features:</h4>
                    <ul style="padding-left:5%;">
                        <li><p>Feature of listing of products.</p></li>
                        <li><p>Add a new product and persist the changes.</p></li>
                        <li><p>When selecting a product on the listing, they are taken to the details of the product.</p></li>
                        <li><p>Details will display all details of the product..</p></li>
                        <li><p>On the details, the user may edit the product properties and persist the changes.</p></li>
                    </ul>
                </div>`
})

export class HomeComponent{
}