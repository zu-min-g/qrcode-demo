<template>  
    <b-form-group>
        <b-row>
            <b-col sm="3">
                <label class="col-form-label" :for="id">{{ label }}</label>
            </b-col>
            <b-col sm="9">
                <b-form-select :id="id"
                    v-model="selected"
                    @input="$emit('input', selected)"
                    :options="options"></b-form-select>
                <small v-if="small" class="text-muted">{{ small }}</small>
            </b-col>
        </b-row>
    </b-form-group>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        label: String,
        value: [String, Number],
        options: Array,
        id: String,
        small: {type: String, default: '' },
    },
    data() {
        return {
            selected: this.value
        }
    }
})
</script>