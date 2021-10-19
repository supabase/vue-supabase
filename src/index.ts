/** @ts-ignore , vue-demi seems to be not strongly typed so typescript freaks out. */
import { App, Vue2, Plugin, PluginObject } from "vue-demi";
import {
  SupabaseClient,
  SupabaseClientOptions,
  SupabaseRealtimePayload,
  AuthUser,
  AuthSession,
} from "@supabase/supabase-js";
import { VueSupabaseClient } from "./VueSupabaseClient";
import {
  useSupabase,
  useSupabaseAuth,
  useSupabaseStorage,
} from "./composables";

type Options = {
  supabaseUrl: string;
  supabaseKey: string;
  supabaseOptions: SupabaseClientOptions;
};

function install(app: typeof Vue2 | App, options: Options) {
  const supabase = new VueSupabaseClient(
    options.supabaseUrl,
    options.supabaseKey,
    options.supabaseOptions
  );
  supabase.install(app);
}

export { useSupabase, useSupabaseAuth, useSupabaseStorage };

export {
  SupabaseClient,
  SupabaseClientOptions,
  SupabaseRealtimePayload,
  AuthUser,
  AuthSession,
};

const VueSupabase: PluginObject<Options> | Plugin = {
  install,
};

export default VueSupabase;
