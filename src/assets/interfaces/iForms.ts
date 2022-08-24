export interface IFormSlide {
    title: string,
    inputs: IFormInputs[]
}

export interface IForm {
    title: string,
    subtitle: string,
    slides: IFormSlide[]
}

export interface IFormInputs {   
    type: string,
    text: string, 
    nameGroup: string,
    active: string, 
    values: 
        {
        text: string,
        nameInput: string,
        icon: string
        }[]
}