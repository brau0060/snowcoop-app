export default {
    name: "formAddAddress",
    data () {
        return {
        showForm: false,
        place: null,
        formData: {
            street: null,
            city: null,
            province: null,
            postalCode: null,
            lat: null,
            lng: null
        },
        rules: {
            street: [{ required: true }],
            city: [{ required: true }],
            province: [{ required: true}],
            postalCode: [{ required: true }],
            lat: [{ required: true }],
            lng: [{ required: true }]
        },
        isFormValidated: false,
        addressInput: null
    };
},
    methods: {
        updateIsFormValidated() {
            // checks if all fields of the address form are valid
            const fields = this.$refs.formData.fields;
            this.isFormValidated = fields.reduce((acc, field) => {
                const valid = field.isRequired && field.validateState === "success";
                const noError = !field.isRequired && field.validateState !== "error";
                return acc && (valid || noError);
            }, true);
        },

        submit() {
            if (this.isFormValidated) {
                // fils form data on submit
                const address = {
                    street: this.formData.street,
                    city: this.formData.city,
                    province: this.formData.province,
                    postalCode: this.formData.postalCode,
                    lat: this.formData.lat,
                    lng: this.formData.lng
                };
                this.$store
                .dispatch("ADD_ADDRESS", address)
                .then(
                    address => this.onAddAddressSuccessful(address),
                    error => this.onAddAddressFailed(error)
                );
            }
        },
        // checks form data on submit
        onAddAddressSuccessful(address) {
            if (address) {
                this.toggleForm(false);
            }
        },
        onAddAddressFailed(error) {
            /* eslint-disable */
            console.error(error);
            this.toggleForm(false);
        },

        setPlace(place) {
            const { address_components, geometry } = place;
            const address = this.buildAddressData(address_components, geometry);
            // if their is an address, auto fill all spots with the google API address infromation
            if(address) {
                this.place = address;
                this.formData.street = `${address.streetNumber} ${address.streetName}`;
                this.formData.city = address.city;
                this.formData.province = address.province;
                this.formData.postalCode = address.postalCode;
                this.formData.lat = address.lat;
                this.formData.lng = address.lng;
            }
        },
        // toggles address form 
        toggleForm(showForm) {
            this.showForm = showForm;
        },
        // resets form data when popup closed
        handleClose() {
            this.place = null;
            this.formData.street = null;
            this.formData.city = null;
            this.formData.province = null;
            this.formData.postalCode = null;
            this.formData.lat = null;
            this.formData.lng = null;
            this.addressInput = null;
        },

        buildAddressData(components, geometry) {
            const address = {};
            // converts the lat and lng to a string from a nummber
            address.lat = geometry.location.lat().toString();
            address.lng = geometry.location.lng().toString();

            components.forEach(component => {
            //   fetch all parts of the google map address API url to generate an address
                if (component.types[0] === "locality") {
                    address.city = component.short_name;
                }

                if (component.types[0] === "street_number") {
                    address.streetNumber = component.short_name;
                }

                if (component.types[0] === "route") {
                    address.streetName = component.short_name;
                }

                if (component.types[0] === "administrative_area_level_1") {
                    address.province = component.short_name;
                }
                if (component.types[0] === "postal_code" ){
                    address.postalCode = component.short_name;
                }
            });

            return address;
        }
    }
};