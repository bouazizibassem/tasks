const multipleStep1 = `<div class='step-container' id='steps-container-'><div class='multiple-step after'><div class='multi-step-container' id='msc-id-'></div><button class='btn-sous-step' id='btn-sous-step-' type='button'>Add</button></div></div>`;
const SousStep =  `<div class='sous-step' id='step-id-'><div class='before-sous-step' id='before-s-'></div>Step with js<div class='edit'><a class='edit-del a-edit' id='btn-edit'><i class="fa-solid fa-pen btn-edit btn-i"></i></a><a class='edit-del a-delete' id='btn-remove'><i class="fa-solid fa-trash btn-delete btn-i"></i></a></div></div>`;
const beforSousStep = `<div class='before-sous-step' id='before-s-'></div>`;
const andOr = `<div class='and-or' id='etat'>Or</div>`;
const headerStepContainer=`<div class='header-step' id='h-step'><div class='title-step'><h3 class='h3-title-step'>Step 2 multiple-step</h3><div class='etat-liaison' id='etat-switch-id-'><label for='s1' class='label-or-and'>Or&#160;&#160;</label><input id='s1' type='checkbox' class='switch'><label for='s1' class='label-or-and'>And</label></div></div></div>`;

var sectionStepID = document.getElementById('steps');
var ids = 0;
var compteurSousStep = 0;
var idBeforSousStep = 1;

function creatSimpleStep(){

    /***********************************************************/
    document.querySelector('#steps').insertAdjacentHTML('beforeend',  multipleStep1);
    /***********************************************************/

    ids = ids + 1;

    /** step container --> add id */
    var idStepContainer = "step-container-"+ids;
    var stepsContainer = document.getElementById('steps-container-');
        stepsContainer.setAttribute("id", idStepContainer);

    /** multi step caontainer --> add id */
    var mscId = "msc-id-"+ids;
    var multiStepContainerId = document.getElementById('msc-id-');
        multiStepContainerId.setAttribute("id", mscId);
        
        headerContainerStep(ids);
        step_1(ids);

    /** btn sous step --> add id */
    var idBtnSouStep = "btn-sous-step-"+ids;
    var btnSousStep = document.getElementById('btn-sous-step-');
        btnSousStep.setAttribute("id", idBtnSouStep); 

    

        // Add onclick event to btn "Add Step" with id
        document.getElementById(idBtnSouStep).setAttribute('onclick', 'creatSousStep('+ids+')') 
    
}

function headerContainerStep(id){
    /** get container principal */  
    var idMstep = "msc-id-"+id;
    var sectionMultiStepID = document.getElementById(idMstep);
    /** add header step container */
    sectionMultiStepID.insertAdjacentHTML('beforeend',  headerStepContainer); // Add Sous Step without id

    /** Add id to header step container */
    var headerID = "h-step-"+id
    var headerStep = document.getElementById('h-step');
        headerStep.setAttribute('id',headerID);

   /** Switch And/Or --> add id */
   var idDivSwitch = "etat-switch-id-"+id;   
   var DIVswitchAndOr = document.getElementById('etat-switch-id-'); 
       DIVswitchAndOr.setAttribute("id", idDivSwitch); 

   /** get input switch */ 
   var inputSwitch = document.getElementById(idDivSwitch).childNodes[1];
       // Add onclick event to input switch with id
       inputSwitch.setAttribute('onclick', 'switchEtat('+ids+')');
      // add class display none to header title
       headerStep.childNodes[0].classList.add('display-none'); 
}


function  step_1(id){

    var idMstep = "msc-id-"+id;

    /** get container principal */
    var sectionMultiStepID = document.getElementById(idMstep);
    sectionMultiStepID.insertAdjacentHTML('beforeend',  SousStep); // Add Sous Step without id

    /** sous step id --> add id */    
    var SousstepID = "step-id-"+id+'-'+compteurSousStep;
    var SousStepContainer = document.getElementById('step-id-');
    SousStepContainer.setAttribute("id", SousstepID);


    /** Before sous step --> add id */
    var idBeforeSousStep = 'before-s-'+id+'-'+compteurSousStep
    var getBeforeSousStep = document.getElementById('before-s-'); 
        getBeforeSousStep.setAttribute("id", idBeforeSousStep);  
        document.getElementById(idBeforeSousStep).classList.add('display-none');

    /** Add id to "btn-remove" */    
    var idBtn_remove = "btn-remove-"+id+'-'+compteurSousStep;
    var btn_remove = document.getElementById('btn-remove');
        btn_remove.setAttribute("id", idBtn_remove);
        // add onclick to "btn-remove" with "id container" and "id step"
        document.getElementById(idBtn_remove).setAttribute('onclick', 'removeStep('+ids+','+compteurSousStep+')')
    
    
}



function creatSousStep(id){
   
    var idMstep = "msc-id-"+id;
    var idBefore = 'before-s-'+id+'-'+compteurSousStep;
    /** get container principal */
    var sectionMultiStepID = document.getElementById(idMstep);
     
    // remove class 'display-none' to the first div 'before-sous-step'
    var beforeSousstepID = document.getElementById(idBefore);
        if(beforeSousstepID && beforeSousstepID.classList.contains('display-none')){
            beforeSousstepID.classList.remove('display-none')
        }

    console.log(idBefore);
    console.log(beforeSousstepID);
     
    /** remove display class to header container step */
    var headerID = "h-step-"+id
    var headerStep = document.getElementById(headerID);
         if(headerStep.childNodes[0].classList.contains('display-none')){
             headerStep.childNodes[0].classList.remove('display-none')
         }
   
    
    sectionMultiStepID.insertAdjacentHTML('beforeend',  andOr); // Add div "and Or"
    sectionMultiStepID.insertAdjacentHTML('beforeend',  SousStep); // Add Sous Step without id
     

    compteurSousStep = compteurSousStep + 1; 

    /** sous step id --> add id */    
    var SousstepID = "step-id-"+id+'-'+compteurSousStep;
    var SousStepContainer = document.getElementById('step-id-');
    SousStepContainer.setAttribute("id", SousstepID);


    /** Before sous step --> add id */
    var idBeforeSousStep = 'before-s-'+id+'-'+compteurSousStep
    var getBeforeSousStep = document.getElementById('before-s-'); 
        getBeforeSousStep.setAttribute("id", idBeforeSousStep);  

    /** And/Or --> Add id */
    var idAndOr = "etat-"+compteurSousStep;
    var divsAndOR = document.getElementById('etat');
        divsAndOR.setAttribute('id',idAndOr);
        divsAndOR.classList.add('bul-'+id);

        var prevElem = document.getElementById(idAndOr).previousElementSibling.previousElementSibling
        var bul = prevElem.classList.contains('and-or')
       
        /** Test text And/Or */
       if(bul){
        if(prevElem.textContent == 'And'){
            divsAndOR.textContent = 'And';
        }
       }else{
            divsAndOR.textContent = 'Or'
       }
        
    
    /** Add id to "btn-remove" */       
    var idBtn_remove = "btn-remove-"+id+'-'+compteurSousStep;
    var btn_remove = document.getElementById('btn-remove');
        btn_remove.setAttribute("id", idBtn_remove);
        // add onclick to "btn-remove" with "id container" and "id step"
        document.getElementById(idBtn_remove).setAttribute('onclick', 'removeStep('+ids+','+compteurSousStep+')')
    

}



function switchEtat(id){
    var idSwitchChekbox = "etat-switch-id-"+id
    var id_div_and_or = "bul-"+id  

    /** get input switch */ 
    var inputSwitch = document.getElementById(idSwitchChekbox).childNodes[1];
    var div_and_or = document.getElementsByClassName(id_div_and_or);

        if(inputSwitch.checked == true){

            for( var i=0; i< div_and_or.length; i++ ){
                 div_and_or[i].textContent = "And";
                // console.log(div_and_or[i]);
            }
        }else{
            for( var i=0; i< div_and_or.length; i++ ){
                 div_and_or[i].textContent = "Or";
                // console.log(div_and_or[i]);
            }
        }
}


function removeStep(idContainer,idStep){
    
    var stepID = "step-id-"+idContainer+'-'+idStep;
    var step = document.getElementById(stepID);
    var parent_stepNode = step.parentNode.childNodes;
    var bulAfterStep = step.nextElementSibling;
    var lastStep = step.parentNode.lastChild;
    var lastBul = lastStep.previousElementSibling;


    //delete all container 
    if(parent_stepNode.length == 3){
        removeAllDiv(idContainer)
    }

    if(step == lastStep && parent_stepNode.length >= 3){       
        // delete last step and last bul
        lastBul.remove()
        lastStep.remove();
    }else{
        // delete step and the next bul
        step.remove();
        bulAfterStep.remove();       
    }

    // add class display-none to delete the line before step
    if(parent_stepNode.length == 2){

        console.log(parent_stepNode[1]);
        console.log('to function');
        add_display(parent_stepNode[1]);
        
        var headerID = "h-step-"+idContainer
        var headerStep = document.getElementById(headerID);
            headerStep.childNodes[0].classList.add('display-none')
         
    }
}

function removeAllDiv(id){
    var idContainer = "step-container-"+id;
    var divContainer = document.getElementById(idContainer);
    divContainer.remove();
}


function add_display(step){

    var display_none = step.childNodes;
    // console.log('in display');
    // console.log(display_none[0])
        display_none[0].classList.add('display-none'); 

}