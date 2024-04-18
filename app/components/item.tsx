import { submitForm } from '../actions/submitForm';


export function ShopItem() {
    const handleSubmit = async (event:any) => {
        event.preventDefault();
        const formData = new FormData(event.target);
      
        try {
          const response = await submitForm(formData);
          console.log(response.message); // "Form submitted successfully!"
          // Handle successful submission (e.g., show a success message)
        } catch (error:any) {
          console.error(error.message);
          // Handle submission errors
        }
      };
    return (
        <></>
    )
}