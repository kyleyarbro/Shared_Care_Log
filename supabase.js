(function () {
  const cfg = window.SHARED_CARE_LOG_CONFIG;

  if (!cfg || !cfg.SUPABASE_URL || !cfg.SUPABASE_ANON_KEY) {
    window.supabaseClient = null;
    window.supabaseConfigError = "Missing config.js. Copy config.example.js to config.js and add your Supabase URL and anon key.";
    return;
  }

  if (!window.supabase || !window.supabase.createClient) {
    window.supabaseClient = null;
    window.supabaseConfigError = "Supabase CDN client failed to load.";
    return;
  }

  window.supabaseClient = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  });
})();
