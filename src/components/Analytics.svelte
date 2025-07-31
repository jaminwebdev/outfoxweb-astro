<script lang="ts">
  function getOrCreatePersistentCookie(name: string, expiresInDays: number) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
      return match[2];
    }

    const value = crypto.randomUUID();
    const expires = new Date();
    expires.setDate(expires.getDate() + expiresInDays);

    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
    return value;
  }

  function getDeviceType() {
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    // 1. Check User-Agent string for mobile keywords
    if (mobileRegex.test(navigator.userAgent)) {
      return 'mobile';
    }
    // 2. Fallback to screen width as a best guess
    if (window.screen.width < 768) {
      return 'mobile';
    }
    return 'desktop';
  }

  function trackPageView() {
    const userID = getOrCreatePersistentCookie('analytics_user_id', 365);
    const sessionID = getOrCreatePersistentCookie('analytics_session_id', 1 / 48);

    const payload = {
      userID: userID,
      sessionID: sessionID,
      // Visit & Pageview Data
      pagePath: window.location.pathname,
      referrer: document.referrer || 'direct',
      queryParams: window.location.search,
      timestamp: new Date().toISOString(),
      // Technical Data
      userAgent: navigator.userAgent,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      language: navigator.language,
      deviceType: getDeviceType(), // ✨ Added device type
    };

    console.log('Analytics Payload:', payload);

    // 🚀 Send the data to your analytics endpoint
    /*
        fetch('/api/analytics', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            keepalive: true,
        });
        */
  }
  $effect(() => trackPageView());
</script>
