import React from 'react'
import profile from "../../Assets/profile.png"
import edit from "../../Assets/edit.png"
import cards from "../../Assets/cards.png"

function Profile() {
    return (
        <div className='test1'>
            <h1 className='profile'>My Profile</h1>
            <div className="container">
                <div className='user_profile'>
                    <div className='profile_content'>
                        <div className='test'>
                            <img className='image' src={profile} alt='' />
                            <div className='text-container'>
                                <span>Cameraman</span>
                                <span>Williamson</span>
                            </div>
                        </div>
                        <div className='edit_icon'> <img src={edit} alt='' /></div>
                    </div>
                    <div className='cards'>
                        <img src={cards} alt='' />
                    </div>
                    <div className='perdonal_info'>
                        <p className='informastion'>Personal Information</p>
                    </div>
                    <div className='input_fields'>
                        <div className='first_input'>
                            <label>Name</label>
                            <input type="text" placeholder='Enter here' />
                        </div>
                        <div className='second_input'>
                            <label>Email</label>
                            <input type="email" placeholder='Enter here' />
                        </div>
                    </div>
                    <div className='savebtn'>
                        <button>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
