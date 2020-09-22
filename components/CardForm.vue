<template>
    <b-container>
        <InputField :label="$t('contact.name')" id="cardName" v-model="name" @input="$emit('input', getModel())" />
        <InputField :label="$t('contact.kana')" id="cardNameKane" v-model="kana" @input="$emit('input', getModel())" />
        <InputField :label="$t('contact.tel')" id="cardTel" v-model="tel" @input="$emit('input', getModel())" />
        <InputField :label="$t('contact.email')" id="cardEmail" v-model="email" @input="$emit('input', getModel())" />
        <ChoiceField :label="$t('contact.carrier')" id="cardCarrier" v-model="carrier" :options="carriers" @input="$emit('input', getModel())" />
    </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
const CRLF = "\r\n";
export default Vue.extend({
    props: {
        value: Object
    },

    data () {
        return {
            name: this.value.name || '',
            kana: this.value.kana || '',
            tel: this.value.tel || '',
            email: this.value.email || '',
            carrier: this.value.carrier || '',
            carriers: [
                { value: 'docomo', text: 'docomo' },
                { value: 'other', text: 'au & SoftBank' },
            ],
        }
    },

    methods: {
        getModel() {
            let card = ''

            if (this.carrier === 'docomo') {
                card += 'MECARD:'
                if(this.name) card += `N:${this.name};`;
                if(this.kana) card += `SOUND:${this.kana};`;
                if(this.tel) card += `TEL:${this.tel};`;
                if(this.email) card += `EMAIL:${this.email};`;
            } else {
                card += `MEMORY:${CRLF}`
                if(this.name) card += `NAME1:${this.name}${CRLF}`;
                if(this.kana) card += `NAME2:${this.kana}${CRLF}`;
                if(this.tel) card += `TEL1:${this.tel}${CRLF}`;
                if(this.email) card += `MAIL1:${this.email}${CRLF}`;
            }

            return {
                name: this.name,
                kana: this.kana,
                tel: this.tel,
                email: this.email,
                carrier: this.carrier,
                text: card,
            }
        }
    }
})
</script>