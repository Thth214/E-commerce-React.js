const products = [
    {
        "id": 1,
        "nome": "Monitor Dell UltraSharp",
        "descricao": "Monitor LCD com retroiluminação LED",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/61tVKFn-F9L._AC_SL1280_.jpg",
        "preco": "R$ 700,00",
        "categoria": "Eletrônico"
    },
    {
        "id": 2,
        "nome": "Volkswagen Amarok",
        "descricao": "Motor 3.0 V6, TDI turbo diesel, potência de 225cv oaoaoaao",
        "image_url": "https://quatrorodas.abril.com.br/wp-content/uploads/2020/03/amarok-2022-1.jpg?quality=70&strip=info",
        "preco": "R$ 165.400,00",
        "categoria": "Veículo"
    },
    {
        "id": 3,
        "nome": "Sauvage",
        "descricao": "Perfume amadeirado com tons de lavanda",
        "image_url": "https://production-eu01-dior.demandware.net/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw190dbe4b/assets/Y0685240/Y0685240_F068524009_E01_ZHC.jpg",
        "preco": "R$ 469,00",
        "categoria": "Cosmético"
    },
    {
        "id": 4,
        "nome": "Sauvage",
        "descricao": "Perfume amadeirado com tons de lavanda",
        "image_url": "https://production-eu01-dior.demandware.net/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw190dbe4b/assets/Y0685240/Y0685240_F068524009_E01_ZHC.jpg",
        "preco": "R$ 469,00",
        "categoria": "Cosmético"
    },
    {
        "id": 5,
        "nome": "Monitor Dell UltraSharp",
        "descricao": "Monitor LCD com retroiluminação LED",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/61tVKFn-F9L._AC_SL1280_.jpg",
        "preco": "R$ 700,00",
        "categoria": "Eletrônico"
    },
    {
        "id": 6,
        "nome": "Volkswagen Amarok",
        "descricao": "Motor 3.0 V6, TDI turbo diesel, potência de 225cv",
        "image_url": "https://quatrorodas.abril.com.br/wp-content/uploads/2020/03/amarok-2022-1.jpg?quality=70&strip=info",
        "preco": "R$ 165.400,00",
        "categoria": "Veículo"
    },
    {
        "id": 7,
        "nome": "Sauvage",
        "descricao": "Perfume amadeirado com tons de lavanda",
        "image_url": "https://production-eu01-dior.demandware.net/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw190dbe4b/assets/Y0685240/Y0685240_F068524009_E01_ZHC.jpg",
        "preco": "R$ 469,00",
        "categoria": "Cosmético"
    },
    {
        "id": 8,
        "nome": "Sauvage",
        "descricao": "Perfume amadeirado com tons de lavanda",
        "image_url": "https://production-eu01-dior.demandware.net/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw190dbe4b/assets/Y0685240/Y0685240_F068524009_E01_ZHC.jpg",
        "preco": "R$ 469,00",
        "categoria": "Cosmético"
    },{
        "id": 1,
        "nome": "Monitor Dell UltraSharp",
        "descricao": "Monitor LCD com retroiluminação LED",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/61tVKFn-F9L._AC_SL1280_.jpg",
        "preco": "R$ 700,00",
        "categoria": "Eletrônico"
    },
    {
        "id": 2,
        "nome": "Volkswagen Amarok",
        "descricao": "Motor 3.0 V6, TDI turbo diesel, potência de 225cv",
        "image_url": "https://quatrorodas.abril.com.br/wp-content/uploads/2020/03/amarok-2022-1.jpg?quality=70&strip=info",
        "preco": "R$ 165.400,00",
        "categoria": "Veículo"
    },
    {
        "id": 3,
        "nome": "Sauvage",
        "descricao": "Perfume amadeirado com tons de lavanda",
        "image_url": "https://production-eu01-dior.demandware.net/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw190dbe4b/assets/Y0685240/Y0685240_F068524009_E01_ZHC.jpg",
        "preco": "R$ 469,00",
        "categoria": "Cosmético"
    },
    {
        "id": 4,
        "nome": "Sauvage",
        "descricao": "Perfume amadeirado com tons de lavanda",
        "image_url": "https://production-eu01-dior.demandware.net/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw190dbe4b/assets/Y0685240/Y0685240_F068524009_E01_ZHC.jpg",
        "preco": "R$ 469,00",
        "categoria": "Cosmético"
    },
    {
        "id": 5,
        "nome": "Monitor Dell UltraSharp",
        "descricao": "Monitor LCD com retroiluminação LED",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/61tVKFn-F9L._AC_SL1280_.jpg",
        "preco": "R$ 700,00",
        "categoria": "Eletrônico"
    },
    {
        "id": 6,
        "nome": "Volkswagen Amarok",
        "descricao": "Motor 3.0 V6, TDI turbo diesel, potência de 225cv",
        "image_url": "https://quatrorodas.abril.com.br/wp-content/uploads/2020/03/amarok-2022-1.jpg?quality=70&strip=info",
        "preco": "R$ 165.400,00",
        "categoria": "Veículo"
    },
    {
        "id": 7,
        "nome": "Sauvage",
        "descricao": "Perfume amadeirado com tons de lavanda",
        "image_url": "https://production-eu01-dior.demandware.net/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw190dbe4b/assets/Y0685240/Y0685240_F068524009_E01_ZHC.jpg",
        "preco": "R$ 469,00",
        "categoria": "Cosmético"
    },
    {
        "id": 8,
        "nome": "Sauvage",
        "descricao": "Perfume amadeirado com tons de lavanda",
        "image_url": "https://production-eu01-dior.demandware.net/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw190dbe4b/assets/Y0685240/Y0685240_F068524009_E01_ZHC.jpg",
        "preco": "R$ 469,00",
        "categoria": "Cosmético"
    },{
        "id": 1,
        "nome": "Monitor Dell UltraSharp",
        "descricao": "Monitor LCD com retroiluminação LED",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/61tVKFn-F9L._AC_SL1280_.jpg",
        "preco": "R$ 700,00",
        "categoria": "Eletrônico"
    },
    {
        "id": 2,
        "nome": "Volkswagen Amarok",
        "descricao": "Motor 3.0 V6, TDI turbo diesel, potência de 225cv",
        "image_url": "https://quatrorodas.abril.com.br/wp-content/uploads/2020/03/amarok-2022-1.jpg?quality=70&strip=info",
        "preco": "R$ 165.400,00",
        "categoria": "Veículo"
    },
    {
        "id": 3,
        "nome": "Sauvage",
        "descricao": "Perfume amadeirado com tons de lavanda",
        "image_url": "https://production-eu01-dior.demandware.net/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw190dbe4b/assets/Y0685240/Y0685240_F068524009_E01_ZHC.jpg",
        "preco": "R$ 469,00",
        "categoria": "Cosmético"
    },
    {
        "id": 4,
        "nome": "Sauvage",
        "descricao": "Perfume amadeirado com tons de lavanda",
        "image_url": "https://production-eu01-dior.demandware.net/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw190dbe4b/assets/Y0685240/Y0685240_F068524009_E01_ZHC.jpg",
        "preco": "R$ 469,00",
        "categoria": "Cosmético"
    },
    {
        "id": 5,
        "nome": "Monitor Dell UltraSharp",
        "descricao": "Monitor LCD com retroiluminação LED",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/61tVKFn-F9L._AC_SL1280_.jpg",
        "preco": "R$ 700,00",
        "categoria": "Eletrônico"
    },
    {
        "id": 6,
        "nome": "Volkswagen Amarok",
        "descricao": "Motor 3.0 V6, TDI turbo diesel, potência de 225cv",
        "image_url": "https://quatrorodas.abril.com.br/wp-content/uploads/2020/03/amarok-2022-1.jpg?quality=70&strip=info",
        "preco": "R$ 165.400,00",
        "categoria": "Veículo"
    },
    {
        "id": 7,
        "nome": "Sauvage",
        "descricao": "Perfume amadeirado com tons de lavanda",
        "image_url": "https://production-eu01-dior.demandware.net/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw190dbe4b/assets/Y0685240/Y0685240_F068524009_E01_ZHC.jpg",
        "preco": "R$ 469,00",
        "categoria": "Cosmético"
    },
    {
        "id": 8,
        "nome": "Sauvage",
        "descricao": "Perfume amadeirado com tons de lavanda",
        "image_url": "https://production-eu01-dior.demandware.net/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw190dbe4b/assets/Y0685240/Y0685240_F068524009_E01_ZHC.jpg",
        "preco": "R$ 469,00",
        "categoria": "Cosmético"
    },{
        "id": 1,
        "nome": "Monitor Dell UltraSharp",
        "descricao": "Monitor LCD com retroiluminação LED",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/61tVKFn-F9L._AC_SL1280_.jpg",
        "preco": "R$ 700,00",
        "categoria": "Eletrônico"
    },
    {
        "id": 2,
        "nome": "Volkswagen Amarok",
        "descricao": "Motor 3.0 V6, TDI turbo diesel, potência de 225cv",
        "image_url": "https://quatrorodas.abril.com.br/wp-content/uploads/2020/03/amarok-2022-1.jpg?quality=70&strip=info",
        "preco": "R$ 165.400,00",
        "categoria": "Veículo"
    },
    {
        "id": 3,
        "nome": "Sauvage",
        "descricao": "Perfume amadeirado com tons de lavanda",
        "image_url": "https://production-eu01-dior.demandware.net/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw190dbe4b/assets/Y0685240/Y0685240_F068524009_E01_ZHC.jpg",
        "preco": "R$ 469,00",
        "categoria": "Cosmético"
    },
    {
        "id": 4,
        "nome": "Sauvage",
        "descricao": "Perfume amadeirado com tons de lavanda",
        "image_url": "https://production-eu01-dior.demandware.net/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw190dbe4b/assets/Y0685240/Y0685240_F068524009_E01_ZHC.jpg",
        "preco": "R$ 469,00",
        "categoria": "Cosmético"
    },
    {
        "id": 5,
        "nome": "Monitor Dell UltraSharp",
        "descricao": "Monitor LCD com retroiluminação LED",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/61tVKFn-F9L._AC_SL1280_.jpg",
        "preco": "R$ 700,00",
        "categoria": "Eletrônico"
    },
    {
        "id": 6,
        "nome": "Volkswagen Amarok",
        "descricao": "Motor 3.0 V6, TDI turbo diesel, potência de 225cv",
        "image_url": "https://quatrorodas.abril.com.br/wp-content/uploads/2020/03/amarok-2022-1.jpg?quality=70&strip=info",
        "preco": "R$ 165.400,00",
        "categoria": "Veículo"
    },
    {
        "id": 7,
        "nome": "Sauvage",
        "descricao": "Perfume amadeirado com tons de lavanda",
        "image_url": "https://production-eu01-dior.demandware.net/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw190dbe4b/assets/Y0685240/Y0685240_F068524009_E01_ZHC.jpg",
        "preco": "R$ 469,00",
        "categoria": "Cosmético"
    },
    {
        "id": 8,
        "nome": "Sauvage",
        "descricao": "Perfume amadeirado com tons de lavanda",
        "image_url": "https://production-eu01-dior.demandware.net/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw190dbe4b/assets/Y0685240/Y0685240_F068524009_E01_ZHC.jpg",
        "preco": "R$ 469,00",
        "categoria": "Cosmético"
    }
]
  
  export default products;