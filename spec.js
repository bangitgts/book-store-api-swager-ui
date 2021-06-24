var spec = {
    swagger: "2.0", // Phiên bản Swagger UI
    info: {
        description: "Các thông tin mô tả về dự án và API",
        version: "1.0", // Phiên bản API
        title: "Book Store Shop",
    },
    host: "45.77.12.16:4000", // Server và port deploy API
    basePath: "/", // Đường dẫn tới API
    tags: [
        // Danh sách các nhóm API: admin, users, images,...
        {
            name: "Product", // Tên nhóm API
            description: "API Về Product", // Mô tả về nhóm API
        },
        {
            name: "Account", // Tên nhóm API
            description: "Các API về đăng ký, đăng nhập", // Mô tả về nhóm API
        },
        {
            name: "Chỉnh Sửa Account", // Tên nhóm API
            description: "Các API về đăng ký, đăng nhập", // Mô tả về nhóm API
        },
        {
            name: "Cart", // Tên nhóm API
            description: "Các API về giỏ hàng", // Mô tả về nhóm API
        },
    ],
    schemes: ["http"], // Sử dụng scheme gì? HTTP, HTTPS?
    paths: {
        "/product/": {
            // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            get: {
                // Phương thức gửi request: get, post, put, delete
                tags: ["Product"],
                summary: "Lấy Dữ Liệu Của Dự Án",
                operationId: "getalldata",

                produces: ["application/json"], // Loại dữ liệu trả về
                responses: {
                    200: {
                        description: "Get all dữ liệu",
                    },
                },
                security: [],
            },
        },

        "/account": {
            // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            get: {
                // Phương thức gửi request: get, post, put, delete
                tags: ["Account"],
                summary: "Trả về dữ liệu của tài khoản",

                operationId: "",

                produces: ["application/json"], // Loại dữ liệu trả về
                responses: {
                    200: {
                        description: "Get all dữ liệu",
                    },
                    400: {
                        description: "Đăng nhập không thành công",
                    },

                    401: {
                        description: "Chưa đăng nhập",
                    },
                },
                security: [{
                    api_key: [],
                }, ],
            },
        },
        "/account/login": {
            // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            post: {
                // Phương thức gửi request: get, post, put, delete
                tags: ["Account"],
                summary: "Đăng nhập tài khoản",
                operationId: "",
                consumes: ["application/x-www-form-urlencoded"],
                produces: ["application/json"],
                parameters: [
                    // Các tham số
                    { in: "formData", // Tham số được gửi lên từ form
                        name: "email", // Tên tham số
                        required: "true", // Tham số là bắt buộc
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    },
                    { in: "formData",
                        name: "password",
                        required: "true",
                        schema: {
                            type: "string",
                        },
                    },
                ], // Loại dữ liệu trả về
                responses: {
                    200: {
                        description: "Get all dữ liệu",
                    },
                },
                security: [],
            },
        },

        "/account/register": {
            // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            post: {
                // Phương thức gửi request: get, post, put, delete
                tags: ["Account"],
                summary: "Đăng kí tài khoản",
                consumes: ["application/x-www-form-urlencoded"],
                operationId: "createNewUserAccount",
                produces: ["application/json"], // Loại dữ liệu trả về
                parameters: [
                    // Các tham số
                    { in: "formData", // Tham số được gửi lên từ form
                        name: "email", // Tên tham số
                        required: "true", // Tham số là bắt buộc
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    },
                    { in: "formData",
                        name: "password",
                        required: "true",
                        schema: {
                            type: "string",
                        },
                    },
                    { in: "formData",
                        name: "name",
                        required: "true",
                        schema: {
                            type: "string",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Account created successfully",
                    },
                    400: {
                        description: "Account created failed. Account has been duplicated",
                    },
                    500: {
                        description: "Loi Server",
                    },
                },
                security: [],
            },
        },

        "/account/changepassword": {
            // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            put: {
                // Phương thức gửi request: get, post, put, delete
                tags: ["Chỉnh Sửa Account"],
                summary: "Đổi mật khẩu",
                consumes: ["application/x-www-form-urlencoded"],
                operationId: "changePasswordAccount",
                produces: ["application/json"], // Loại dữ liệu trả về
                parameters: [
                    // Các tham số
                    { in: "formData", // Tham số được gửi lên từ form
                        name: "password", // Tên tham số
                        required: "true", // Tham số là bắt buộc
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    },
                    { in: "formData",
                        name: "newPassword",
                        required: "true",
                        schema: {
                            type: "string",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Change password successfully",
                    },
                    400: {
                        description: "Đăng nhập không thành công",
                    },
                    401: {
                        description: "Chưa đăng nhập tài khoản",
                    },
                    402: {
                        description: "Old password entered is incorrect",
                    },
                },
                security: [{
                    api_key: [],
                }, ],
            },
        },

        "/account/changeinformation": {
            // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            put: {
                // Phương thức gửi request: get, post, put, delete
                tags: ["Chỉnh Sửa Account"],
                summary: "Đổi Thông Tin Tài Khoản",
                consumes: ["application/x-www-form-urlencoded"],
                operationId: "changeInformationAccount",
                produces: ["application/json"], // Loại dữ liệu trả về
                parameters: [
                    // Các tham số
                    { in: "formData", // Tham số được gửi lên từ form
                        name: "address", // Tên tham số
                        //required: "true", // Tham số là bắt buộc
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    },
                    { in: "formData", // Tham số được gửi lên từ form
                        name: "phoneNumber", // Tên tham số
                        //required: "true", // Tham số là bắt buộc
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    },
                    { in: "formData", // Tham số được gửi lên từ form
                        name: "dateBirth", // Tên tham số
                        //required: "true", // Tham số là bắt buộc
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    },
                    { in: "formData", // Tham số được gửi lên từ form
                        name: "sex", // Tên tham số
                        //required: "true", // Tham số là bắt buộc
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    },
                    { in: "formData", // Tham số được gửi lên từ form
                        name: "introduce", // Tên tham số
                        //required: "true", // Tham số là bắt buộc
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Change information successfully",
                    },
                    400: {
                        description: "Đăng nhập không thành công",
                    },
                    401: {
                        description: "Chưa đăng nhập tài khoản",
                    },
                    402: {
                        description: "You are not enough information",
                    },
                },
                security: [{
                    api_key: [],
                }, ],
            },
        },
        "/account/uploadavatar": {
            // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            post: {
                // Phương thức gửi request: get, post, put, delete
                tags: ["Chỉnh Sửa Account"],
                summary: "Đổi Avartar Tài Khoản",
                consumes: ["multipart/form-data"],
                operationId: "changeAvartar",
                produces: ["application/json"], // Loại dữ liệu trả về
                parameters: [
                    // Các tham số
                    { in: "formData", // Tham số được gửi lên từ form
                        name: "file", // Tên tham số
                        description: "file to upload",
                        type: "file",
                        required: "true", // Tham số là bắt buộc
                    },
                ],
                responses: {
                    200: {
                        description: "Change avatar successfully",
                    },
                    400: {
                        description: "Đăng nhập không thành công",
                    },
                    401: {
                        description: "Chưa đăng nhập tài khoản",
                    },
                    402: {
                        description: "File type must be png or jpeg",
                    },
                },
                security: [{
                    api_key: [],
                }, ],
            },
        },
        "/view/{id}": {
            // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            get: {
                // Phương thức gửi request: get, post, put, delete
                tags: ["Chỉnh Sửa Account"],
                summary: "Xem Avartar Tài Khoản",
                consumes: ["application/x-www-form-urlencoded"],
                operationId: "xemAvartar",
                produces: ["application/json"], // Loại dữ liệu trả về
                parameters: [
                    // Các tham số
                    {
                        name: "id",
                        in: "path",
                        description: "Xem avatar",
                        required: true,
                        type: "string",
                    },
                ],
                responses: {
                    200: {
                        description: "Change avatar successfully",
                    },
                    400: {
                        description: "Đăng nhập không thành công",
                    },
                    401: {
                        description: "Chưa đăng nhập tài khoản",
                    },
                    402: {
                        description: "File type must be png or jpeg",
                    },
                },
                security: [{
                    api_key: [],
                }, ],
            },
        },
        "/product/cart": {
            // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            get: {
                // Phương thức gửi request: get, post, put, delete
                tags: ["Cart"],
                summary: "Trả về dữ liệu của tài khoản",
                operationId: "",
                produces: ["application/json"], // Loại dữ liệu trả về
                responses: {
                    200: {
                        description: "Get tất cả dữ liệu giỏ hàng của user",
                    },
                    400: {
                        description: "ERR",
                    },

                    401: {
                        description: "Chưa đăng nhập",
                    },
                },
                security: [{
                    api_key: [],
                }, ],
            },
        },
        "/product/add/{id}": {
            // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            post: {
                // Phương thức gửi request: get, post, put, delete
                tags: ["Cart"],
                summary: "Add product",
                operationId: "",
                parameters: [
                    // Các tham số
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "string",
                    },
                    { in: "formData", // Tham số được gửi lên từ form
                        name: "amount", // Tên tham số
                        required: "true", // Tham số là bắt buộc
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    },
                ],
                produces: ["application/json"], // Loại dữ liệu trả về
                responses: {
                    200: {
                        description: "Add successful",
                    },
                    500: {
                        description: "No products found",
                    },

                    401: {
                        description: "Chưa đăng nhập",
                    },
                },
                security: [{
                    api_key: [],
                }, ],
            },
        },
        "/product/change/{id}": {
            // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            put: {
                // Phương thức gửi request: get, post, put, delete
                tags: ["Cart"],
                summary: "Change product",
                operationId: "",
                parameters: [
                    // Các tham số
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "string",
                    },
                    { in: "formData", // Tham số được gửi lên từ form
                        name: "amount", // Tên tham số
                        required: "true", // Tham số là bắt buộc
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    },
                ],
                produces: ["application/json"], // Loại dữ liệu trả về
                responses: {
                    200: {
                        description: "Change successful",
                    },
                    500: {
                        description: "No products found",
                    },

                    401: {
                        description: "Chưa đăng nhập",
                    },
                },
                security: [{
                    api_key: [],
                }, ],
            },
        },
        "/product/delete/{id}": {
            // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            delete: {
                // Phương thức gửi request: get, post, put, delete
                tags: ["Cart"],
                summary: "Delete product in cart",
                operationId: "",
                parameters: [
                    // Các tham số
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "string",
                    }
                ],
                produces: ["application/json"], // Loại dữ liệu trả về
                responses: {
                    200: {
                        description: "Delete successful",
                    },
                    500: {
                        description: "No products found",
                    },

                    401: {
                        description: "Chưa đăng nhập",
                    },
                },
                security: [{
                    api_key: [],
                }, ],
            },
        },
        "/product/changepayment/{id}": {
            // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            put: {
                // Phương thức gửi request: get, post, put, delete
                tags: ["Cart"],
                summary: "Change Status product in cart",
                operationId: "",
                parameters: [
                    // Các tham số
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "string",
                    }
                ],
                produces: ["application/json"], // Loại dữ liệu trả về
                responses: {
                    200: {
                        description: "Change successfully",
                    },
                    400: {
                        description: "err",
                    },

                    401: {
                        description: "Chưa đăng nhập",
                    },
                },
                security: [{
                    api_key: [],
                }, ],
            },
        },
        "/product/payment": {
            // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            post: {
                // Phương thức gửi request: get, post, put, delete
                tags: ["Cart"],
                summary: "Change Status product in cart",
                operationId: "",
                parameters: [],
                produces: ["application/json"], // Loại dữ liệu trả về
                responses: {
                    200: {
                        description: "Thanh toán Thành Công",
                    },
                    400: {
                        description: "err",
                    },

                    401: {
                        description: "Chưa đăng nhập",
                    },
                },
                security: [{
                    api_key: [],
                }, ],
            },
        },
    },
    securityDefinitions: {
        // Thông tin về api key sử dụng để thực hiện request
        // api_key: {
        //     type: "apiKey", // Thuộc loại api key xác thực
        //     name: "auth-token", // Tên trường chứa api key xác thực
        //     in: "header", // API key được để trong phần header của request
        // }
        api_key: {
            type: "apiKey",
            name: "auth-token",
            in: "header",
        },
    },
    definitions: {
        // Thông tin các đối tượng sẽ trả về
        account: {
            // Tên đối tượng
            type: "object", // Loại đối tượng là object
            properties: {
                // Các thuộc tính của đối tượng
                id: {
                    // Tên thuộc tính
                    type: "integer", // Loại dữ liệu là số nguyên
                },
                username: {
                    type: "string", // Loại dữ liệu là chuỗi
                },
                password: {
                    type: "string",
                },
            },
        },
    },
};