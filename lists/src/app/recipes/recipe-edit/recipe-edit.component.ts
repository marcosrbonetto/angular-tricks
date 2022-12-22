import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit{
    theForm:FormGroup;
    id:number;  
    editMode:boolean=false;

    constructor(private router:Router, private myRoute : ActivatedRoute, private service:RecipeService){}

    ngOnInit(): void {
      this.myRoute.params.subscribe((param:Params)=>{
        this.id = +param['id'];
        this.editMode = param['id'] != null;
        this.initForm();
      })
    }

    initForm(){
      let recipeName='';
      let recipeImage='';
      let recipeDescription='';
      let recipeIngredients = new FormArray([]);

      if(this.editMode){
        let objectToEdit = this.service.getRecipe(this.id);
        recipeName = objectToEdit.name;
        recipeDescription = objectToEdit.description;
        recipeImage = objectToEdit.imagePath;

        if(objectToEdit['ingredients']){
          for(let ing of objectToEdit.ingredients){
            recipeIngredients.push(
              new FormGroup({
                'name': new FormControl(ing.name, Validators.required),
                'amount': new FormControl(ing.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
              })
            );
          }
        }

      }

      this.theForm = new FormGroup({
        'name':new FormControl(recipeName, Validators.required),
        'image':new FormControl(recipeImage, Validators.required),
        'description':new FormControl(recipeDescription, Validators.required),
        'ingredients': recipeIngredients
      });
    }

    getIngredientsControls(){
      return (<FormArray>this.theForm.get('ingredients')).controls;
    }

    addNewIngredientControl(){
      (<FormArray>this.theForm.get('ingredients')).push(
        new FormGroup({
          'name': new FormControl(null,Validators.required),
          'amount': new FormControl(null,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
        })
      );
    }

    onCancel(){
      this.back();
    }

    back(){
      this.router.navigate(["../"], {relativeTo:this.myRoute});
    }

    onDeleteIngredientItem(index:number){
      (<FormArray>this.theForm.get('ingredients')).removeAt(index);
    }

    onSubmit(){
      const newRecipe = new Recipe(
        this.theForm.value['name'],
        this.theForm.value['description'],
        this.theForm.value['image'],
        this.theForm.value['ingredients']
      ); // or passing theForm.value that have the same structure

      if(this.editMode){
        this.service.updateRecipe(this.id,newRecipe); 
        this.editMode = false;
      }
      else{
        this.service.addRecipe(newRecipe);
      }
      this.back();
    }
}
