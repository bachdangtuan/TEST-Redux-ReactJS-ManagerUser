const stateDefault = {
    mangSinhVien: [{
        maSV:1,
        hoTen:'NguyenVanA',
        soDT:'0654665445',
        email:'abcd@gmail.com'
    }]
}

export const QuanlynhansuReducer = (state = stateDefault, action ) =>{
    return {...state}
}