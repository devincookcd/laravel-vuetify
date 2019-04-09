/**
 * Validation Mixin
 */

export default {
  data: () => ({
    $_validation_rules: {
      required: value => !!value || 'Required.',
      email: value => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) || 'Invalid Email.'
    }
  })
}
