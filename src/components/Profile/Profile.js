import './Profile.css';
import { 
    Button, 
    Dialog,
    StyledEngineProvider
  } from "@mui/material";
import DialogContent from '@mui/material/DialogContent';  
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react"; 
import { joiResolver } from "@hookform/resolvers/joi";
import userDataScheme from "../../utils/schemes/userDataScheme";
  
import { CssTextField } from "../../utils/constants/profileConstants.js";

function Profile({user}){
  const [addressesArr, setAddressesArr] = useState([]);

  const {register, handleSubmit, formState: {errors, isValid, isDirty}} = useForm({
    resolver:  joiResolver(userDataScheme),
    defaultValues: {
      firstName: user ? user.firstName : "",
      phoneNumber: user ? user.phoneNumber : "",
      email: user ? user.email : "",
    },
  });


  function userDataOnSubmit(data) {
    // localStorage.setItem("userName", data.firstName);
    // localStorage.setItem("email", data.email);
    // localStorage.setItem("phoneNumber", data.phoneNumber);
    localStorage.setItem("user", JSON.stringify(data));
    //console.log(data);
  }
  var user = JSON.parse(localStorage.getItem('user'));
  console.log(user.firstName);
  const name = document.querySelector('.profile__input_name');
  
    return(
        <section className="profile">
            <h2 className="profile__title">Ваш профиль</h2>
            <div className="profile__container">
                <form 
                className="profile__form profile__container"
                onSubmit={handleSubmit(userDataOnSubmit)}
                // isvalid={isValid}
                >
                <h2 className="profile__subtitle">Ваши данные</h2>
                <input 
                placeholder='Имя'
                className="profile__input profile__input_name"
                label="Имя" 
                title="Ваше имя"
                aria-label="Поле вввода для имени"
                {...register("firstName")}
                //value={user.firstName}
                />
                <span className={`profile__form-error ${!isValid && errors.name ? "profile__form-error_active" : ""}`}>{errors.name || ""}</span>
                <input
                className="profile__input"
                placeholder='Телефон'
                label="Номер телефона" 
                title="Ваш номер телефона"
                aria-label="Поле вввода для номера телефона"
                {...register("phoneNumber")}
                //value={user.phoneNumber}
                />
                <span className={`profile__form-error ${!isValid && errors.name ? "profile__form-error_active" : ""}`}>{errors.name || ""}</span>
                <input
                    className="profile__input"
                    placeholder='Почта'
                    title="Ваша электронная почта"
                    aria-label="Поле вввода для электронной почты"
                    {...register("email")}
                    //value={user.email}
                />
                <span className={`profile__form-error ${!isValid && errors.name ? "profile__form-error_active" : ""}`}>{errors.name || ""}</span>
                <button 
                    type="submit" 
                    className="profile__button profile__button_submit"
                >
                Сохранить
                </button>
            </form>
            </div>
        </section>
    )
}

export default Profile;