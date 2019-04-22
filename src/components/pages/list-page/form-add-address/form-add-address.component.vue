<template>
  <div id="formAddAddress">
      <el-dialog
        title="Add New Address"
        :visible.sync="showForm"
        width="70%">
        <span>
          <div class="form-body-wrapper">
              <el-form :model="formData" ref="formData" @focusout.native="updateIsFormValidated">
                <el-form-item>
                    <gmap-autocomplete class="el-input__inner" @place_changed="setPlace" placeholder="Enter Address" >
                    </gmap-autocomplete>
                  </el-form-item>
            

                  <div v-if="place">
                    <el-form-item :rules="rules.street" prop="street">
                      <el-input placeholder="Street" v-model="formData.street" :disable="true"></el-input>
                    </el-form-item>
                    <el-form-item :rules="rules.city" prop="city">
                      <el-input placeholder="City" v-model="formData.city" :disable="true"></el-input>
                    </el-form-item>
                    <el-form-item :rules="rules.province" prop="province">
                      <el-input placeholder="Province" v-model="formData.province" :disable="true"></el-input>
                    </el-form-item>
                    <el-form-item :rules="rules.postalCode" prop="postalCode">
                      <el-input placeholder="Postal Code" v-model="formData.postalCode" :disable="true"></el-input>
                    </el-form-item>
                    <el-form-item :rules="rules.lat" prop="lat">
                      <el-input placeholder="Latitude" v-model="formData.lat" :disable="true"></el-input>
                    </el-form-item>
                    <el-form-item :rules="rules.lng" prop="lng">
                      <el-input placeholder="Longtude" v-model="formData.lng" :disable="true"></el-input>
                    </el-form-item>
                  </div>
              </el-form>
            </div>
        </span>
        <span slot="footer" class="dialog-footer">
          <el-button class="submit-button" @click="submit">Submit</el-button>
        </span>
      </el-dialog>
  </div>
</template>
<script src="./form-add-address.component.js"></script>
<style src="./form-add-address.component.css" scoped></style>
