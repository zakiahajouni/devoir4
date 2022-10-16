import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/model/produit.model';
import { ActivatedRoute,Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-update-produit',
  templateUrl:'./update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {
  currentProduit = new Produit();

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private produitService: ProduitService) { }

  ngOnInit(): void {
    this.currentProduit = this.produitService.consulterProduit(this.activatedRoute.snapshot. params['id']);
console.log(this.currentProduit);
  }

  updateProduit() {
    // console.log(this.currentProduit);
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(['produits']);
  }

}
