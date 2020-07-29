import { Product } from "./../product.model";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";

@Component({
    selector: "app-product-create",
    templateUrl: "./product-create.component.html",
    styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
    product: Product = {
        name: "",
        price: 0,
    };
    constructor(
        private productService: ProductService,
        private router: Router
    ) {}

    ngOnInit(): void {}

    createProduct(): void {
        this.productService.create(this.product).subscribe(() => {
            this.productService.showMsg("Produro criado.");
            this.router.navigate(["/products"]);
        });
    }
    cancelCreate(): void {
        this.router.navigate(["/products"]);
    }
}
