// LA DESIO - HYBRID CLOUD & CLIENT API ADAPTER (v3.0.0)
(function() {
  'use strict';

  const API_BASE = window.location.origin.includes('localhost') || window.location.origin.includes('127.0.0.1')
    ? 'http://localhost:5000/api'
    : '/api';

  class AtelierApi {
    constructor() {
      this.isOnline = false;
      this.checkHealth();
    }

    async checkHealth() {
      try {
        const res = await fetch(API_BASE + '/health', { method: 'GET', headers: { 'Accept': 'application/json' } });
        if (res.ok) {
          const data = await res.json();
          this.isOnline = true;
          console.log('🍃 [La Desio Cloud API]: Connected to backend server', data);
        }
      } catch (e) {
        this.isOnline = false;
        console.log('ℹ️ [La Desio Client]: Running in fast local storage mode');
      }
    }

    async sendOtp(phone) {
      if (!this.isOnline) return null;
      try {
        const res = await fetch(API_BASE + '/auth/send-otp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phone })
        });
        return await res.json();
      } catch (e) {
        return null;
      }
    }

    async verifyOtp(phone, otp, name) {
      if (!this.isOnline) return null;
      try {
        const res = await fetch(API_BASE + '/auth/verify-otp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phone, otp, name })
        });
        return await res.json();
      } catch (e) {
        return null;
      }
    }

    async submitReview(productId, review) {
      if (!this.isOnline) return null;
      try {
        const res = await fetch(API_BASE + '/desserts/' + productId + '/reviews', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(review)
        });
        return await res.json();
      } catch (e) {
        return null;
      }
    }
  }

  window.ladesioApi = new AtelierApi();
})();
