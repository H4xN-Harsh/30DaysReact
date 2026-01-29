


export default function UserLogout(){
    const token = localStorage.getItem('token');
    const Logout= async()=>{
        try {
            const res = fetch('http://localhost:4000/users/logout')
        }
    }
    return (
        <></>
    )
}