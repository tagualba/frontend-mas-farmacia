class PostBuyEntity {
    constructor(Name, Surname, IdentificationNumber, IdTypeIdentification, HomeStreet, HomeHeigth, HomeDetails, Departament, Region, IdPostalCode,email, phone,adicionalInfo) {
            this.Name = Name,
            this.Surname = Surname,
            this.IdentificationNumber = IdentificationNumber,
            this.IdTypeIdentification = Number(IdTypeIdentification),
            this.HomeStreet = HomeStreet,
            this.HomeHeigth = Number(HomeHeigth),
            this.HomeDetails = HomeDetails,
            this.Departament = Departament,
            this.Region = Region,
            this.IdPostalCode = Number(IdPostalCode),
            this.Email = email,
            this.Phone = phone,
            this.AdicionalInfo = adicionalInfo
    }/*
     this.Name = "Agustin",
        this.Surname = "Gonzalez",
        this.IdentificationNumber = "38130434",
        this.IdTypeIdentification = Number(1),
        this.HomeStreet = "Alberto Marciano ",
        this.HomeHeigth = Number(348),
        this.HomeDetails = "casa blanca",
        this.Departament = "Marcos Paz",
        this.Region = "Buenos Aires",
        this.IdPostalCode = Number(1727),
        this.Email = "Agustingonzalez660@gmail.com"
        this.Phone = "1164079724",
        this.AdicionalInfo = "Lugarsito al fondo de zona oeste"
    }*/
}
export { PostBuyEntity }