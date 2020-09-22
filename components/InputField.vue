<template>  
    <b-form-group>
        <b-row>
            <b-col sm="3">
                <label class="col-form-label" :for="id">{{ label }}</label>
            </b-col>
            <b-col sm="9">
                <b-form-input :id="id" v-model="newVal" @input="$emit('input', newVal)" />
            </b-col>
        </b-row>
    </b-form-group>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        label: String,
        value: String,
        id: String,
    },
    data() {
        return {
            newVal: this.value
        }
    }
})
</script>