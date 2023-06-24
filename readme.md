---
-notes

we did return {bank: state.bank+1}

rather than state.bank = state.bank+1 

this helps in not changing the original state and ensures immutablity  by making a new copy of the state each time and not changing the state directly


note - middleware is used after dispatch it takes the payload for some other prcessing before it is send to reducer funtion as an action

dispatch action are dispatched immediately we cant pass promises in dispatch thus we need a middleware


one should create multiple reducer for different functionality
as it avoids soo much nesting
each reducer will have its own state and in that reducer only its state will be available for change
---------------------------------------

-reduxtoolkit

