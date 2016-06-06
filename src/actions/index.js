import {ADD_FORM_ELEMENT,REMOVE_FORM_ELEMENT,VALIDATE_FROM_ELEMENT,TOUCH_FORM_ELEMENT} from 'const/index.js'
const addFormElement = (element) => {
	return {
		type : ADD_FORM_ELEMENT,
		element,
	}
}

const removeFormElement = (element) => {
	return {
		type : REMOVE_FORM_ELEMENT,
		element
	}
}

const validateFormElement = (element) => {
	return {
		type : VALIDATE_FROM_ELEMENT,
		element,
		error,
	}
}

const touchFormElement = (element) => {
	return {
		type : TOUCH_FORM_ELEMENT,
		element,
		touched,
	}
}