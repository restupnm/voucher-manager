/* cloud.spot — WiFi Voucher Manager
 * Single-file vanilla JS app. No backend, no API.
 * Storage: IndexedDB. Deployable to GitHub Pages as-is.
 */
'use strict';

/* ================================================================== *
 *  i18n — English / Indonesia / Jawa
 * ================================================================== */
const I18N = {
  en: {
    // Landing
    enterVoucher: 'Enter Voucher',
    enterVoucherDesc: 'Enter your voucher code to see its validity period.',
    voucherCode: 'Voucher Code',
    voucherPlaceholder: 'e.g. 1A2B3C4D',
    checkVoucher: 'Check Voucher',
    onlyValidNote: 'Only valid voucher codes can be checked.',
    voucherInvalid: 'Invalid voucher code.',
    adminEntered: 'Welcome, Admin!',
    // Check result
    cekVoucherTitle: 'Voucher Details',
    cekVoucherDesc: 'View voucher information and validity',
    backToHome: 'Back',
    scanToConnect: 'Scan to connect, valid for',
    buyerLabel: 'Buyer',
    purchasedAtLabel: 'Purchased At',
    remainingTime: 'Remaining Time',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    notSoldYet: 'Not sold yet',
    statusAvailable: 'Available',
    statusUsed: 'Used',
    statusExpired: 'Expired',
    // Dashboard
    brand:'Brand',
    appName:'Application Name',
    copyright:'Copyright',
    voucherManager: 'Voucher Manager',
    voucherManagerDesc: 'Manage and monitor all your hotspot vouchers.',
    importVoucher: 'Import Voucher',
    addVoucher: 'Add Voucher',
    totalVoucher: 'Total Voucher',
    allVouchers: 'All vouchers',
    available: 'Available',
    readyToUse: 'Ready to use',
    used: 'Used',
    alreadyUsed: 'Already used',
    expired: 'Expired',
    expiredDesc: 'Expired',
    searchPlaceholder: 'Search voucher code...',
    allPeriods: 'All Periods',
    allStatus: 'All Status',
    no: 'No',
    voucher: 'Voucher',
    periode: 'Period',
    status: 'Status',
    buyer: 'Buyer',
    purchasedAt: 'Timestamp',
    qrCode: 'QR',
    checkout: 'Action',
    sell: 'Sell',
    purchased: 'Purchased',
    edit: 'Edit',
    deleteVoucher: 'Delete',
    showing: 'Showing',
    of: 'of',
    vouchers: 'vouchers',
    // Sidebar
    dashboard: 'Dashboard',
    backup: 'Backup',
    locations:'Locations',
    addLocation:'Add Location',
    cloudSpotHotspot: 'Cloud Spot Hotspot',
    routerLabel: 'Router',
    uptime: 'Uptime',
    connected: 'Connected',
    admin: 'Admin',
    owner: 'Owner',
    logout: 'Logout',
    // Periods
    period1H: '1 Day',
    period1M: '1 Week',
    period1B: '1 Month',
    // Sell modal
    sellModalTitle: 'Sell Voucher',
    name: 'Name',
    namePlaceholder: 'Enter buyer name',
    phoneNumber: 'Phone Number',
    phonePlaceholder: 'WhatsApp / phone number',
    messageOptional: 'Message (Optional)',
    messagePlaceholder: 'e.g. Thanks for buying a Cloud Spot voucher. Scan the QR to connect.',
    sendVoucher: 'Send Voucher',
    cancel: 'Cancel',
    voucherSent: 'Voucher image downloaded — WhatsApp opened!',
    nameRequired: 'Name is required',
    phoneRequired: 'Phone number is required',
    // Add modal
    addVoucherTitle: 'Add Voucher',
    addVoucherDesc: 'Create one or more vouchers',
    howManyVouchers: 'How many vouchers?',
    periodLabel: 'Period',
    save: 'Save',
    vouchersCreated: 'vouchers created',
    customCode: 'Custom Code (optional, for 1 voucher)',
    // Import
    importTitle: 'Import Vouchers from Excel',
    importDesc: 'Excel must have columns: code, period (1H/1M/1B), buyer, phone, purchasedAt (ISO, optional)',
    chooseFile: 'Choose Excel file',
    importResult: 'Imported',
    skipped: 'skipped',
    downloadTemplate: 'Download Template',
    // Backup
    backupTitle: 'Backup & Restore',
    backupDesc: 'Download or restore your voucher database.',
    downloadJson: 'Download JSON',
    downloadExcel: 'Download Excel',
    restoreJson: 'Restore from JSON',
    restoreWarning: 'Restoring will replace ALL current data. Continue?',
    restoreDone: 'Restore complete',
    // Edit
    editVoucherTitle: 'Edit Voucher',
    markAvailable: 'Mark as Available (reset sale)',
    confirmDelete: 'Delete this voucher?',
    deleted: 'Voucher deleted',
    saved: 'Saved',
    // Settings
    language: 'Language',
    settings: 'Settings',
    changePassword: 'Change Admin Password',
    oldPassword: 'Current Password',
    newPassword: 'New Password',
    passwordChanged: 'Password changed',
    wrongPassword: 'Wrong password',
    // Misc
    voucherCardSubtitle: 'Fast internet, no boundaries.',
    validUntil: 'Valid for',
    websiteLabel: 'cloud.spot',
    download: 'Download',
    close: 'Close',
    yes: 'Yes',
    noLabel: 'No',
    empty: 'No vouchers yet. Add one to get started.',
    noResults: 'No vouchers match your filters.',
  },
  id: {
    enterVoucher: 'Masukkan Voucher',
    enterVoucherDesc: 'Masukkan kode voucher untuk melihat estimasi masa berlaku.',
    voucherCode: 'Kode Voucher',
    voucherPlaceholder: 'Contoh: 1A2B3C4D',
    checkVoucher: 'Cek Voucher',
    onlyValidNote: 'Hanya kode voucher yang valid dapat diperiksa.',
    voucherInvalid: 'Kode voucher tidak valid.',
    adminEntered: 'Selamat datang, Admin!',
    cekVoucherTitle: 'Cek Voucher',
    cekVoucherDesc: 'Lihat informasi dan masa berlaku voucher',
    backToHome: 'Kembali',
    scanToConnect: 'Scan untuk terhubung, berlaku untuk',
    buyerLabel: 'Pembeli',
    purchasedAtLabel: 'Purchased At',
    remainingTime: 'Sisa Waktu',
    days: 'Hari',
    hours: 'Jam',
    minutes: 'Menit',
    seconds: 'Detik',
    notSoldYet: 'Belum terjual',
    statusAvailable: 'Available',
    statusUsed: 'Used',
    statusExpired: 'Expired',
    brand:'Merek',
    appName:'Nama Aplikasi',
    copyright:'Hak Cipta',
    voucherManager: 'Voucher Manager',
    voucherManagerDesc: 'Kelola dan pantau semua voucher hotspot Anda.',
    importVoucher: 'Import Voucher',
    addVoucher: 'Add Voucher',
    totalVoucher: 'Total Voucher',
    allVouchers: 'Semua voucher',
    available: 'Available',
    readyToUse: 'Siap digunakan',
    used: 'Used',
    alreadyUsed: 'Sudah digunakan',
    expired: 'Expired',
    expiredDesc: 'Expired',
    searchPlaceholder: 'Cari kode voucher...',
    allPeriods: 'Semua Periode',
    allStatus: 'Semua Status',
    no: 'No',
    voucher: 'Voucher',
    periode: 'Periode',
    status: 'Status',
    buyer: 'Pembeli',
    purchasedAt: 'Pranala',
    qrCode: 'QR',
    checkout: 'Checkout',
    sell: 'Sell',
    purchased: 'Purchased',
    edit: 'Edit',
    deleteVoucher: 'Hapus',
    showing: 'Menampilkan',
    of: 'dari',
    vouchers: 'voucher',
    dashboard: 'Dashboard',
    backup: 'Backup',
    locations:'Lokasi',
    addLocation:'Tambah Lokasi',
    cloudSpotHotspot: 'Cloud Spot Hotspot',
    routerLabel: 'Router',
    uptime: 'Uptime',
    connected: 'Connected',
    admin: 'Admin',
    owner: 'Owner',
    logout: 'Keluar',
    period1H: '1 Hari',
    period1M: '1 Minggu',
    period1B: '1 Bulan',
    sellModalTitle: 'Jual Voucher',
    name: 'Name',
    namePlaceholder: 'Masukkan nama pembeli',
    phoneNumber: 'Phone Number',
    phonePlaceholder: 'Masukkan nomor WhatsApp / telepon',
    messageOptional: 'Message (Optional)',
    messagePlaceholder: 'Contoh: Terima kasih telah membeli voucher Cloud Spot. Silakan scan QR code untuk terhubung ke internet.',
    sendVoucher: 'Send Voucher',
    cancel: 'Cancel',
    voucherSent: 'Gambar voucher terunduh — WhatsApp dibuka!',
    nameRequired: 'Nama wajib diisi',
    phoneRequired: 'Nomor telepon wajib diisi',
    addVoucherTitle: 'Tambah Voucher',
    addVoucherDesc: 'Buat satu atau lebih voucher',
    howManyVouchers: 'Berapa banyak voucher?',
    periodLabel: 'Periode',
    save: 'Simpan',
    vouchersCreated: 'voucher dibuat',
    customCode: 'Kode Kustom (opsional, untuk 1 voucher)',
    importTitle: 'Impor Voucher dari Excel',
    importDesc: 'Excel harus memiliki kolom: code, period (1H/1M/1B), buyer, phone, purchasedAt (ISO, opsional)',
    chooseFile: 'Pilih file Excel',
    importResult: 'Berhasil impor',
    skipped: 'dilewati',
    downloadTemplate: 'Unduh Template',
    backupTitle: 'Backup & Restore',
    backupDesc: 'Unduh atau pulihkan database voucher Anda.',
    downloadJson: 'Unduh JSON',
    downloadExcel: 'Unduh Excel',
    restoreJson: 'Restore dari JSON',
    restoreWarning: 'Restore akan mengganti SEMUA data saat ini. Lanjutkan?',
    restoreDone: 'Restore selesai',
    editVoucherTitle: 'Edit Voucher',
    markAvailable: 'Tandai sebagai Available (reset penjualan)',
    confirmDelete: 'Hapus voucher ini?',
    deleted: 'Voucher dihapus',
    saved: 'Tersimpan',
    language: 'Bahasa',
    settings: 'Pengaturan',
    changePassword: 'Ganti Password Admin',
    oldPassword: 'Password Saat Ini',
    newPassword: 'Password Baru',
    passwordChanged: 'Password diganti',
    wrongPassword: 'Password salah',
    voucherCardSubtitle: 'Internet cepat, koneksi tanpa batas.',
    validUntil: 'berlaku',
    websiteLabel: 'cloud.spot',
    download: 'Unduh',
    close: 'Tutup',
    yes: 'Ya',
    noLabel: 'Tidak',
    empty: 'Belum ada voucher. Tambahkan untuk memulai.',
    noResults: 'Tidak ada voucher yang cocok dengan filter.',
  },
  jw: {
    enterVoucher: 'Lebokno Voucher',
    enterVoucherDesc: 'Lebokno kode voucher kanggo ndelok suwene mlaku.',
    voucherCode: 'Kode Voucher',
    voucherPlaceholder: 'Tuladha: 1A2B3C4D',
    checkVoucher: 'Cek Voucher',
    onlyValidNote: 'Mung kode voucher sah sing iso dicek.',
    voucherInvalid: 'Kode voucher ora sah.',
    adminEntered: 'Sugeng rawuh, Admin!',
    cekVoucherTitle: 'Cek Voucher',
    cekVoucherDesc: 'Ndelok info lan suwene voucher',
    backToHome: 'Mbalik',
    scanToConnect: 'Scan gawe nyambung, iso kanggo',
    buyerLabel: 'Pangguno',
    purchasedAtLabel: 'Tuku Tanggal',
    remainingTime: 'Sisa Wektu',
    days: 'Dino',
    hours: 'Jam',
    minutes: 'Menit',
    seconds: 'Detik',
    notSoldYet: 'Durung kedol',
    statusAvailable: 'Siap',
    statusUsed: 'Wis Nganggo',
    statusExpired: 'Wis Entek',
    brand:'Merek',
    appName:'Jenenge Aplikasi',
    copyright:'Hak Cipto',
    voucherManager: 'Voucher Manager',
    voucherManagerDesc: 'Atur lan awasi kabeh voucher hotspot panjenengan.',
    importVoucher: 'Impor Voucher',
    addVoucher: 'Tambah Voucher',
    totalVoucher: 'Total Voucher',
    allVouchers: 'Sedoyo voucher',
    available: 'Siap',
    readyToUse: 'Siap dianggo',
    used: 'Wis dianggo',
    alreadyUsed: 'Wis dianggo',
    expired: 'Wis entek',
    expiredDesc: 'Wis entek',
    searchPlaceholder: 'Goleki kode voucher...',
    allPeriods: 'Sedoyo Periode',
    allStatus: 'Sedoyo Status',
    no: 'No',
    voucher: 'Voucher',
    periode: 'Periode',
    status: 'Status',
    buyer: 'Pangguno',
    purchasedAt: 'Pranolo',
    qrCode: 'QR',
    checkout: 'Aksi',
    sell: 'Dol',
    purchased: 'Wis Tuku',
    edit: 'Owahi',
    deleteVoucher: 'Busak',
    showing: 'Nuduhake',
    of: 'saka',
    vouchers: 'voucher',
    dashboard: 'Dashboard',
    backup: 'Backup',
    locations:'Lokasi',
    addLocation:'Tambah Lokasi',
    cloudSpotHotspot: 'Cloud Spot Hotspot',
    routerLabel: 'Router',
    uptime: 'Urip Suwe',
    connected: 'Nyambung',
    admin: 'Admin',
    owner: 'Sing Nduwe',
    logout: 'Metu',
    period1H: '1 Dino',
    period1M: '1 Minggu',
    period1B: '1 Sasi',
    sellModalTitle: 'Adol Voucher',
    name: 'Jeneng',
    namePlaceholder: 'Lebokno jeneng tukon',
    phoneNumber: 'Nomer Telpon',
    phonePlaceholder: 'Lebokno nomer WhatsApp / telpon',
    messageOptional: 'Pesen (Opsional)',
    messagePlaceholder: 'Tuladha: Matur nuwun wis tuku voucher Cloud Spot. Monggo scan QR kanggo nyambung internet.',
    sendVoucher: 'Kirim Voucher',
    cancel: 'Batal',
    voucherSent: 'Gambar voucher diunduh — WhatsApp dibuka!',
    nameRequired: 'Jeneng kudu diisi',
    phoneRequired: 'Nomer telpon kudu diisi',
    addVoucherTitle: 'Tambah Voucher',
    addVoucherDesc: 'Gawe siji utawa luwih voucher',
    howManyVouchers: 'Pira akehe voucher?',
    periodLabel: 'Periode',
    save: 'Simpen',
    vouchersCreated: 'voucher digawe',
    customCode: 'Kode Custom (opsional, kanggo 1 voucher)',
    importTitle: 'Impor Voucher saka Excel',
    importDesc: 'Excel kudu duwe kolom: code, period (1H/1M/1B), buyer, phone, purchasedAt (ISO, opsional)',
    chooseFile: 'Pilih file Excel',
    importResult: 'Sukses impor',
    skipped: 'dilewati',
    downloadTemplate: 'Unduh Template',
    backupTitle: 'Backup & Restore',
    backupDesc: 'Unduh utawa balikno database voucher panjenengan.',
    downloadJson: 'Unduh JSON',
    downloadExcel: 'Unduh Excel',
    restoreJson: 'Restore saka JSON',
    restoreWarning: 'Restore bakal ngganti SAKABEHE data saiki. Terusake?',
    restoreDone: 'Restore rampung',
    editVoucherTitle: 'Owahi Voucher',
    markAvailable: 'Tandai Siap (reset dol)',
    confirmDelete: 'Busak voucher iki?',
    deleted: 'Voucher dibusak',
    saved: 'Wis disimpen',
    language: 'Boso',
    settings: 'Setelan',
    changePassword: 'Ganti Password Admin',
    oldPassword: 'Password Saiki',
    newPassword: 'Password Anyar',
    passwordChanged: 'Password diganti',
    wrongPassword: 'Password salah',
    voucherCardSubtitle: 'Internet cepet, tanpa wates.',
    validUntil: 'sah',
    websiteLabel: 'cloud.spot',
    download: 'Unduh',
    close: 'Tutup',
    yes: 'Iyo',
    noLabel: 'Ora',
    empty: 'Durung ono voucher. Tambah disik kanggo miwiti.',
    noResults: 'Ora ono voucher sing cocok karo filter.',
  },
};

const LANG_LABELS = { en: 'EN', id: 'ID', jw: 'JV' };
const LANG_NAMES  = { en: 'English', id: 'Indonesia', jw: 'Basa Jawa' };

function t(key) {
  const lang = state.lang || 'id';
  return (I18N[lang] && I18N[lang][key]) || I18N.id[key] || key;
}

/* ================================================================== *
 *  Constants
 * ================================================================== */
const PERIODS = {
  '1H': { days: 1,  labelKey: 'period1H', pillClass: 'pill-period-1H' },
  '1M': { days: 7,  labelKey: 'period1M', pillClass: 'pill-period-1M' },
  '1B': { days: 30, labelKey: 'period1B', pillClass: 'pill-period-1B' },
};
const PERIOD_ORDER = ['1H', '1M', '1B'];

const DEFAULT_ADMIN_PASSWORD = 'zzzz';
const PER_PAGE = 10;
const DB_NAME = 'cloudvch';
const DB_VERSION = 2;

const BRAND = {
  appName: 'cloud.spot',
  labelName: 'visio.NET',
    labelNameX: 'visio',
    labelNameZ: 'NET',
  footerName: 'visioNET Hotspot',
  yearName: '2026',
  companyName: 'visioNET.Inc'
};

/* ================================================================== *
 *  IndexedDB wrapper
 * ================================================================== */
const DB = (() => {
  let _db = null;
  function open() {
    return new Promise((resolve, reject) => {
      if (_db) return resolve(_db);
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains('vouchers')) {
          const s = db.createObjectStore('vouchers', { keyPath: 'code' });
          s.createIndex('period', 'period', { unique: false });
          s.createIndex('createdAt', 'createdAt', { unique: false });
        }
        if (!db.objectStoreNames.contains('settings')) {
          db.createObjectStore('settings', { keyPath: 'key' });
        }
        if(!db.objectStoreNames.contains('locations'))
          db.createObjectStore('locations',{keyPath:'id'});
        };
      req.onsuccess = () => { _db = req.result; resolve(_db); };
      req.onerror = () => reject(req.error);
    });
  }
  async function tx(store, mode = 'readonly') {
    const db = await open();
    return db.transaction(store, mode).objectStore(store);
  }
  function reqP(req) { return new Promise((res, rej) => { req.onsuccess = () => res(req.result); req.onerror = () => rej(req.error); }); }

  return {
    async getAllVouchers() { const s = await tx('vouchers'); return reqP(s.getAll()); },
    async getVoucher(code) { const s = await tx('vouchers'); return reqP(s.get(code)); },
    async putVoucher(v) { const s = await tx('vouchers', 'readwrite'); return reqP(s.put(v)); },
    async deleteVoucher(code) { const s = await tx('vouchers', 'readwrite'); return reqP(s.delete(code)); },
    async clearVouchers() { const s = await tx('vouchers', 'readwrite'); return reqP(s.clear()); },
    async getSetting(key) { const s = await tx('settings'); const r = await reqP(s.get(key)); return r ? r.value : null; },
    async setSetting(key, value) { const s = await tx('settings', 'readwrite'); return reqP(s.put({ key, value })); },
    async getLocations(){const s=await tx('locations');return reqP(s.getAll());},
    async putLocation(v){const s=await tx('locations','readwrite');return reqP(s.put(v));},
  };
})();

/* ================================================================== *
 *  State
 * ================================================================== */
const state = {
  view: 'landing',        // 'landing' | 'check-result' | 'dashboard'
  lang: localStorage.getItem('cs_lang') || 'id',
  currentVoucher: null,   // for check-result
  adminPressTimer: null,
  adminPressRAF:null,
  adminLongPress:false,
  adminPressProgress:0,
  vouchers: [],
  locations:[],
  selectedLocation:'all',
  search: '',
  pendingWhatsAppUrl: '',
  statusFilter: 'all',
  filterPeriod: 'all',
  filterStatus: 'all',
  sortPeriod: 0,          // 0 none, 1 asc, -1 desc
  sortVoucher: 0,
  sortStatus: 0,
  sortBuyer: 0,
  page: 1,
  sidebarView: 'dashboard', // 'dashboard' | 'backup' | 'settings'
  countdownTimerId: null,
  qrCache: {},            // code -> dataURL
};

function setState(partial) { Object.assign(state, partial); render(); }

/* ================================================================== *
 *  Utilities
 * ================================================================== */
const RANDOM_ALPHABET = 'abcdefghijkmnpqrstuvwxyz23456789';
function randCode(prefix, len = 4) {
  let s = prefix;
  for (let i = 0; i < len; i++) s += RANDOM_ALPHABET[Math.floor(Math.random() * RANDOM_ALPHABET.length)];
  return s;
}

function computeStatus(v) {
  if (!v.purchasedAt) return 'available';
  const purchasedMs = new Date(v.purchasedAt).getTime();
  const durationMs = (PERIODS[v.period]?.days || 0) * 24 * 60 * 60 * 1000;
  if (Date.now() < purchasedMs + durationMs) return 'used';
  return 'expired';
}

function adminPressStart(){
  adminPressCancel();

  state.adminLongPress=false;

  const btn=document.getElementById('check-btn');
  if(!btn)return;

  const start=performance.now();

  function animate(now){
    const p=Math.min((now-start)/1800,1);

    btn.style.setProperty('--hold',p);

    if(p>=1){
      state.adminLongPress=true;
      navigator.vibrate?.(40);
      openAdminLogin();
      return;
    }

    state.adminPressRAF=requestAnimationFrame(animate);
  }

  state.adminPressRAF=requestAnimationFrame(animate);
}

  state.adminPressTimer=setTimeout(()=>{
    state.adminLongPress=true;
    navigator.vibrate?.(40);
    openAdminLogin();
  },1800);
}

function adminPressCancel(){

  clearTimeout(state.adminPressTimer);

  cancelAnimationFrame(state.adminPressRAF);

  state.adminPressTimer=null;
  state.adminPressRAF=null;

  const btn=document.getElementById('check-btn');
  if(btn)btn.style.setProperty('--hold',0);

}

function adminButtonClick(){
  if(state.adminLongPress){
    state.adminLongPress=false;
    return;
  }
  handleEntry(document.getElementById('voucher-input').value);
}

function remainingMs(v) {
  if (!v.purchasedAt) return null;
  const purchasedMs = new Date(v.purchasedAt).getTime();
  const durationMs = (PERIODS[v.period]?.days || 0) * 24 * 60 * 60 * 1000;
  return Math.max(0, purchasedMs + durationMs - Date.now());
}

function formatRemaining(ms) {
  if (ms == null) return null;
  const totalSec = Math.floor(ms / 1000);
  const d = Math.floor(totalSec / 86400);
  const h = Math.floor((totalSec % 86400) / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  return { d, h, m, s, pad: (n) => String(n).padStart(2, '0') };
}

function formatDateID(iso, lang = state.lang) {
  if (!iso) return '-';
  const d = new Date(iso);
  const monthsID = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
  const monthsEN = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const monthsJW = ['Jan','Feb','Mar','Apr','Mei','Juni','Juli','Agt','Sep','Okt','Nop','Des'];
  const months = lang === 'en' ? monthsEN : lang === 'jw' ? monthsJW : monthsID;
  return `${String(d.getDate()).padStart(2,'0')} ${months[d.getMonth()]} ${d.getFullYear()} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
}

function escapeHtml(s) {
  if (s == null) return '';
  return String(s).replace(/[&<>"']/g, (c) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;' }[c]));
}

function normalizePhone(p) {
  let s = (p || '').replace(/[^\d+]/g, '');
  if (s.startsWith('+')) s = s.slice(1);
  if (s.startsWith('0')) s = '62' + s.slice(1);   // Indonesian convention
  return s;
}

function normalizeHost(host){
  return host.trim()
    .replace(/^https?:\/\//i,'')
    .replace(/\/login$/i,'')
    .replace(/\/$/,'');
}

function routerURL(host){
  host=normalizeHost(host);
  return host?`http://${host}/login`:'';
}

function toggleStatusFilter(filter) {
  state.statusFilter =
  state.statusFilter === filter ? 'all' : filter;
  render();
}

function toggleSort(type) {

  const key = `sort${type[0].toUpperCase()}${type.slice(1)}`;

  const value = state[key];

  state.sortPeriod = 0;
  state.sortVoucher = 0;
  state.sortBuyer = 0;
  state.sortStatus = 0;

  state[key] =
    value === 1 ? -1 :
    value === -1 ? 0 : 1;

  render();
}

function sortArrow(sort){
  if(!sort) return '';

  return `<i data-lucide="${
    sort===1?'chevron-up':'chevron-down'
  }" class="w-3.5 h-3.5 shrink-0"></i>`;
}

function sortableHeader(label, field, extraClass = '') {
  return `
    <th class="cursor-pointer select-none ${extraClass}" onclick="toggleSort('${field}')">
      <span class="inline-flex items-center gap-1 whitespace-nowrap">
        ${label}
        ${sortArrow(state[`sort${field[0].toUpperCase()}${field.slice(1)}`])}
      </span>
    </th>
  `;
}


async function makeQR(text, size = 256) {
  const cacheKey = `${text}@${size}`;

  if (state.qrCache[cacheKey]) {
    return state.qrCache[cacheKey];
  }

  const url = await QRCode.toDataURL(text, {
    errorCorrectionLevel: 'M',
    margin: 1,
    width: size,
    color: {
      dark: '#1A1525',
      light: '#FFFFFF'
    }
  });

  state.qrCache[cacheKey] = url;
  return url;
}

function toast(msg, type = 'info', ms = 2600) {
  const root = document.getElementById('toast-root');
  const el = document.createElement('div');
  el.className = 'toast ' + (type === 'success' ? 'success' : type === 'error' ? 'error' : type === 'warn' ? 'warn' : '');
  el.innerHTML = `<i data-lucide="${type==='success'?'check-circle':type==='error'?'alert-circle':type==='warn'?'alert-triangle':'info'}" class="w-5 h-5 text-brand"></i><span class="text-sm font-medium text-ink">${escapeHtml(msg)}</span>`;
  root.appendChild(el);
  if (window.lucide) lucide.createIcons();
  setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateX(20px)'; el.style.transition = 'all .25s ease'; setTimeout(() => el.remove(), 260); }, ms);
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 100);
}

function downloadDataURL(dataURL, filename) {
  const a = document.createElement('a');
  a.href = dataURL; a.download = filename; document.body.appendChild(a); a.click();
  setTimeout(() => a.remove(), 100);
}

/* ================================================================== *
 *  Initial seed (only if DB is empty)
 * ================================================================== */
async function seedIfEmpty() {
  if(!state.locations.length) await DB.putLocation({id:'all',name:'All',type:'super'});
  await refreshLocations();
  const all = await DB.getAllVouchers();
  const pwd = await DB.getSetting('adminPassword');
  if (!pwd) await DB.setSetting('adminPassword', DEFAULT_ADMIN_PASSWORD);
  if (all.length > 0) return;

  // disable demo
  return;
  
  // Seed a few demo vouchers
  const now = Date.now();
  const demo = [
    { period: '1M', code: '1M' + 'yxj5', buyer: 'Andi',  phone: '628123456701', daysAgo: 2, msg: 'Demo' },
    { period: '1M', code: '1M' + 'igv2', buyer: 'Budi',  phone: '628123456702', daysAgo: 4, msg: 'Demo' },
    { period: '1B', code: '1B' + 'i5nd', buyer: 'Citra', phone: '628123456703', daysAgo: 6, msg: 'Demo' },
    { period: '1B', code: '1B' + 'ym9v', buyer: 'Dewi',  phone: '628123456704', daysAgo: 12, msg: 'Demo' },
    { period: '1B', code: '1B' + 'bhvj', buyer: 'Adit',  phone: '628123456705', daysAgo: 45, msg: 'Demo' }, // expired
  ];
  // Plus some available ones
  const available = [
    { period: '1M', code: '1M' + '2pgz' },
    { period: '1M', code: '1M' + 'n4uv' },
    { period: '1M', code: '1M' + '9kfa' },
    { period: '1H', code: '1H' + 'a1b2' },
    { period: '1H', code: '1H' + 'c3d4' },
    { period: '1B', code: '1B' + 'dx7w' },
    { period: '1B', code: '1B' + 'i7g3' },
    { period: '1B', code: '1B' + 'ysd5' },
    { period: '1B', code: '1B' + '5kru' },
  ];
  for (const d of demo) {
    await DB.putVoucher({
      code: d.code,
      username: d.code, password: '',
      period: d.period,
      purchasedAt: new Date(now - d.daysAgo * 86400000).toISOString(),
      buyerName: d.buyer, buyerPhone: d.phone, message: d.msg,
      createdAt: new Date(now - (d.daysAgo + 1) * 86400000).toISOString(),
    });
  }
  for (const a of available) {
    await DB.putVoucher({ code: a.code, username: a.code, password: '', period: a.period, purchasedAt: null, buyerName: '', buyerPhone: '', createdAt: new Date(now).toISOString() });
  }
}

/* ================================================================== *
 *  Auth / Routing
 * ================================================================== */
async function handleEntry(input) {
const value=(input||'').trim();
  if(value.toLowerCase()==='/admin'){
  openAdminLogin();
  return;
}
  if (!value) return;
  const adminPwd = (await DB.getSetting('adminPassword')) || DEFAULT_ADMIN_PASSWORD;
  if (value === adminPwd) {
    toast(t('adminEntered'), 'success');
    setState({ view: 'dashboard', page: 1 });
    return;
  }
  const v = await DB.getVoucher(value);
  if (!v) {
    toast(t('voucherInvalid'), 'error');
    const inputEl = document.querySelector('[data-testid="voucher-input"]');
    if (inputEl) { inputEl.classList.add('!border-red-400'); setTimeout(() => inputEl.classList.remove('!border-red-400'), 1200); }
    return;
  }
  setState({ view: 'check-result', currentVoucher: v });
}

function logout() {
  if (state.countdownTimerId) clearInterval(state.countdownTimerId);
  setState({ view: 'landing', currentVoucher: null });
}

function toggleSidebar() {

    if (window.innerWidth >= 1024) return;

    const sidebar = document.getElementById("sidebar");
    const backdrop = document.getElementById("sidebar-backdrop");

    if (!sidebar) return;

    sidebar.classList.toggle("-translate-x-full");
    backdrop.classList.toggle("hidden");
}

/* ================================================================== *
 *  Main render dispatcher
 * ================================================================== */
async function refreshVouchers() { state.vouchers = await DB.getAllVouchers();}
async function refreshLocations(){state.locations=await DB.getLocations();}

function render() {
  // Sync html lang
  document.documentElement.lang = state.lang;
  const app = document.getElementById('app');
  if (state.countdownTimerId) { clearInterval(state.countdownTimerId); state.countdownTimerId = null; }

  if (state.view === 'landing') app.innerHTML = viewLanding();
  else if (state.view === 'check-result') app.innerHTML = viewCheckResult();
  else if (state.view === 'dashboard') app.innerHTML = viewDashboard();

  // Bind events for current view
  bindEvents();
  if (window.lucide) lucide.createIcons();

  // Post render tasks
if(state.view==="check-result"){
    fillVoucherQRs();
    startCountdown();
}

if(state.view==="dashboard"){
    renderQRThumbnails();
}
}
/* ================================================================== *
 *  View: Landing
 * ================================================================== */
function viewLanding(){return`
<div class="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">

<div class="bg-blobs"></div>

<div class="absolute top-3 right-3 z-20">
${langSwitcherHTML()}
</div>

<main class="relative z-10 w-full max-w-md fade-in">

<div class="flex items-center justify-center gap-4 mb-4 scale-in">

<div class="w-14 h-14 rounded-2xl bg-brand-light shadow-sm flex items-center justify-center flex-shrink-0">
<i data-lucide="settings-2" class="w-8 h-8 text-brand"></i>
</div>

<h1 class="font-display font-bold tracking-tight text-brand whitespace-nowrap ${
    state.lang === 'en'
        ? 'text-4xl sm:text-5xl'
        : 'text-3xl sm:text-4xl'
}">
    ${t('enterVoucher')}
</h1>

</div>

<p class="text-center text-ink-soft mb-8 px-5 leading-relaxed">
${t('enterVoucherDesc')}
</p>

<div class="card p-6 sm:p-7 scale-in" style="animation-delay:.05s">

<label class="block font-semibold text-ink mb-3" for="voucher-input">
${t('voucherCode')}
</label>

<div class="relative">

<i data-lucide="settings-2" class="w-5 h-5 text-brand absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"></i>

<input
id="voucher-input"
data-testid="voucher-input"
class="input input-lg pl-12 pr-4 tracking-wide"
placeholder="${t('voucherPlaceholder')}"
autocomplete="off"
autofocus
onkeydown="if(event.key==='Enter'){event.preventDefault();document.querySelector('[data-testid=cek-voucher-btn]').click();}"
>

</div>

<button
id="check-btn"
data-testid="cek-voucher-btn"
class="btn-primary btn-hold-admin w-full mt-5 text-lg py-4"
onclick="adminButtonClick()"
onmousedown="adminPressStart()"
ontouchstart="adminPressStart()"
onmouseup="adminPressCancel()"
onmouseleave="adminPressCancel()"
ontouchend="adminPressCancel()"
ontouchcancel="adminPressCancel()">

<i data-lucide="search" class="w-5 h-5"></i>
<span>${t('checkVoucher')}</span>

</button>

<div class="flex items-center gap-2 mt-5 text-sm text-ink-soft">

<i data-lucide="info" class="w-4 h-4 text-brand flex-shrink-0"></i>

<span>${t('onlyValidNote')}</span>

</div>

</div>

<footer class="flex justify-center mt-10 opacity-80">
${cloudLogoHTML()}
</footer>

</main>

</div>`;}

function cloudLogoHTML(){return`<div class="flex justify-center items-center w-full py-2"><img src="assets/logo.png" alt=${BRAND.appName} style="width:160px;height:auto"></div>`;}

function langSwitcherHTML() {
  const langs = ['en', 'id', 'jw'];
  return `<div class="flex items-center gap-1 bg-white rounded-xl p-1 shadow-soft border border-brand/5" data-testid="lang-switcher">
    ${langs.map(l => `
      <button data-testid="lang-${l}" onclick="changeLang('${l}')"
        class="px-3 py-1.5 rounded-lg text-sm font-semibold transition-all font-display ${state.lang === l ? 'bg-brand text-white shadow' : 'text-ink-soft hover:bg-brand-light hover:text-brand'}">
        ${LANG_LABELS[l]}
      </button>`).join('')}
  </div>`;
}

function changeLang(l) {
  state.lang = l;
  localStorage.setItem('cs_lang', l);
  render();
}

/* ================================================================== *
 *  View: Check Result
 * ================================================================== */
function viewCheckResult() {
  const v = state.currentVoucher;
  if (!v) { setTimeout(() => setState({ view: 'landing' }), 0); return ''; }
  const status = computeStatus(v);
  const days = PERIODS[v.period]?.days || 0;
  return `
  <div class="relative min-h-screen p-4 sm:p-8">
    <div class="bg-blobs"></div>
    <div class="absolute top-5 right-5 z-10">${langSwitcherHTML()}</div>

    <div class="relative z-10 max-w-xl mx-auto fade-in">
      <div class="flex items-center gap-4 mb-7 mt-2">
        <button data-testid="back-btn" onclick="logout()" class="w-12 h-12 rounded-xl bg-white shadow-soft flex items-center justify-center text-brand hover:bg-brand-light transition-all">
          <i data-lucide="arrow-left" class="w-5 h-5"></i>
        </button>
        <div>
          <h1 class="font-display font-bold text-2xl sm:text-3xl text-brand">${t('cekVoucherTitle')}</h1>
          <p class="text-ink-soft text-sm">${t('cekVoucherDesc')}</p>
        </div>
      </div>

      <div class="card p-5 sm:p-6 mb-5">
        ${voucherCardHTML(v, status, days, 'preview-card')}
      </div>

      ${[
        { icon: 'buyer', label: t('buyerLabel'), value: v.buyerName || t('notSoldYet') },
        { icon: 'calendar', label: t('purchasedAtLabel'), value: v.purchasedAt ? formatDateID(v.purchasedAt) : '-' },
      ].map(row => `
        <div class="card p-4 sm:p-5 mb-3 flex items-center gap-4">
          <div class="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
            <i data-lucide="${row.icon}" class="w-5 h-5 text-brand"></i>
          </div>
          <div class="min-w-0 flex-1">
            <div class="text-xs text-ink-soft uppercase tracking-wider font-semibold">${row.label}</div>
            <div class="font-bold text-ink truncate">${escapeHtml(row.value)}</div>
          </div>
        </div>
      `).join('')}

      <div class="card p-5 sm:p-6">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center">
            <i data-lucide="clock" class="w-5 h-5 text-brand"></i>
          </div>
          <div class="text-xs text-ink-soft uppercase tracking-wider font-semibold">${t('remainingTime')}</div>
        </div>
        <div id="countdown-grid" class="grid grid-cols-4 gap-2 sm:gap-4 text-center" data-testid="countdown">
          <div><div class="countdown" data-cd="d">--</div><div class="label mt-1">${t('days')}</div></div>
          <div><div class="countdown" data-cd="h">--</div><div class="label mt-1">${t('hours')}</div></div>
          <div><div class="countdown" data-cd="m">--</div><div class="label mt-1">${t('minutes')}</div></div>
          <div><div class="countdown" data-cd="s">--</div><div class="label mt-1">${t('seconds')}</div></div>
        </div>
      </div>

      <div class="text-center mt-8 opacity-80">${cloudLogoHTML('w-6 h-6')}</div>
    </div>
  </div>`;
}

function startCountdown() {
  const v = state.currentVoucher;
  if (!v) return;
  const tick = () => {
    const status = computeStatus(v);
    const grid = document.getElementById('countdown-grid');
    if (!grid) return;
    if (status === 'available') {
      grid.querySelectorAll('[data-cd]').forEach((el, i) => { el.textContent = i === 0 ? `${PERIODS[v.period]?.days || 0}d` : '00'; });
      return;
    }
    if (status === 'expired') {
      grid.querySelectorAll('[data-cd]').forEach(el => el.textContent = '00');
      return;
    }
    const r = formatRemaining(remainingMs(v));
    if (!r) return;
    const set = (k, val) => { const el = grid.querySelector(`[data-cd="${k}"]`); if (el) el.textContent = val; };
    set('d', `${r.d}d`); set('h', r.pad(r.h)); set('m', r.pad(r.m)); set('s', r.pad(r.s));
  };
  tick();
  state.countdownTimerId = setInterval(tick, 1000);
}

function voucherCardHTML(v,status,days,idSuffix=''){return`
<div id="voucher-card-${escapeHtml(idSuffix)}" class="voucher-card mx-auto flex items-center gap-6 w-[610px] max-w-full">

  <div class="left flex flex-col w-[64%]">

    <div class="voucher-export-header">
      <div class="voucher-export-icon">
        <i data-lucide="radio-tower"></i>
      </div>
      <div class="voucher-export-text">
        ${BRAND.labelNameX}<span class="voucher-export-dot">.</span>${BRAND.labelNameZ}
      </div>
    </div>

<div class="voucher-divider"></div>

    <div class="text-[10px] tracking-[0.35em] font-bold uppercase text-brand">
      ${t('voucherCode')}
    </div>

    <div class="voucher-code-box mt-2">
      ${escapeHtml(v.code)}
    </div>

    ${v.password?`
    <div class="voucher-password">
      <span class="voucher-password-label">${t('password')}</span>
      <span class="voucher-password-value">${escapeHtml(v.password)}</span>
    </div>`:''}

  </div>

  <div class="divider"></div>

  <div class="right">

  <div class="voucher-status ${computeStatus(v)}">
    ${t(computeStatus(v))}
  </div>

    <div class="border-2 border-brand rounded-2xl p-2">
      <img
        id="qr-${escapeHtml(idSuffix)}"
        data-qr-text="${escapeHtml(v.code)}"
        class="w-32 h-32"/>
    </div>

    <div class="mt-2 flex flex-col items-center">
      <div class="text-[8px] leading-none whitespace-nowrap">
        ${t('scanToConnect')}
      </div>

      <div class="text-[12px] font-bold text-brand whitespace-nowrap">
        ${days} ${t('days')}
      </div>
    </div>

  </div>

  <div class="voucher-ribbon">
    <i data-lucide="globe" class="w-4 h-4"></i>
    <span>${BRAND.labelName}</span>
  </div>

</div>`;}

// After voucher card renders, fill the QR <img>
async function fillVoucherQRs(scope = document) {
  const imgs = scope.querySelectorAll(
    'img[data-qr-text]:not([data-qr-done])'
  );

  console.log("QR images found:", imgs.length);
  // Router URL from Settings
  let routerUrl = await DB.getSetting("routerUrl");

  // Fallback if nothing has been saved yet
  if (!routerUrl) {
    routerUrl = "http://192.168.0.1/login";
  }

  for (const img of imgs) {
    const code = img.getAttribute("data-qr-text");

    // username+password voucher
const v = await DB.getVoucher(code);

const username = v?.username || code;
const password = v?.password || code;

const qrText =
  `${routerUrl}?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
    const url = await makeQR(qrText, 256);

    img.src = url;
    img.setAttribute("data-qr-done", "1");
  }
}

/* ================================================================== *
 *  View: Dashboard
 * ================================================================== */
function viewDashboard() {
  const list = state.vouchers;
  const stats = {
    total: list.length,
    available: list.filter(v => computeStatus(v) === 'available').length,
    used: list.filter(v => computeStatus(v) === 'used').length,
    expired: list.filter(v => computeStatus(v) === 'expired').length,
  };
  const filtered = applyFilters(list);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  if (state.page > totalPages) state.page = totalPages;
  const pageStart = (state.page - 1) * PER_PAGE;
  const pageItems = filtered.slice(pageStart, pageStart + PER_PAGE);

  return `
  <div class="flex min-h-screen overflow-hidden">
    ${sidebarHTML()}
    
<main class="flex-1 min-w-0 w-full p-5 sm:p-8 lg:p-8 lg:ml-60">

<button
    onclick="toggleSidebar()"
    class="
        lg:hidden
        fixed
        bottom-6
        left-6
        z-50
        w-14
        h-14
        rounded-2xl
        bg-brand
        text-white
        shadow-glow
        hover:scale-105
        active:scale-95
        transition-all
        flex
        items-center
        justify-center">

    <i data-lucide="menu" class="w-7 h-7"></i>

</button>
   
    <div class="fixed bottom-5 right-5 z-50">
  ${langSwitcherHTML()}
    </div>
      <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-7 fade-in">
        <div>
          <h1 class="font-display font-bold text-3xl sm:text-4xl text-brand">${state.sidebarView === 'backup' ? t('backupTitle') : t('voucherManager')}</h1>
          <p class="text-ink-soft mt-1">${state.sidebarView === 'backup' ? t('backupDesc') : t('voucherManagerDesc')}</p>
        </div>

  ${state.sidebarView==='dashboard'?`
  <div class="flex items-center gap-3">
    <button data-testid="import-btn" onclick="openImportModal()" class="btn-secondary min-w-[180px] justify-center"><i data-lucide="upload" class="w-4 h-4"></i> ${t('importVoucher')}</button>
<button
  data-testid="add-voucher-btn"
  onclick="openAddModal()"
  title="${t('addVoucher')}"
  aria-label="${t('addVoucher')}"
  class="btn-primary w-11 h-11 sm:w-auto sm:h-auto sm:min-w-[180px] justify-center px-0 sm:px-4"
>
  <i data-lucide="plus" class="w-4 h-4"></i>
  <span class="hidden sm:inline ml-2">${t('addVoucher')}</span>
</button>
  </div>`:''}
</div>

      ${dashboardContentHTML(stats,pageItems,filtered,totalPages,pageStart)}

      <footer class="text-center text-ink-soft text-sm mt-10 pb-4">
        © ${BRAND.yearName} <span class="font-bold text-brand">${BRAND.companyName}</span>. All rights reserved.
      </footer>
    </main>
  </div>`;
}

function dashboardContentHTML(stats,pageItems,filtered,totalPages,pageStart){
if(state.sidebarView==='backup')return backupViewHTML();
if(state.sidebarView==='settings')return settingsViewHTML();
return `      <!-- Stats -->
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-7 fade-in">
        ${statCardHTML('tickets',  '#EFEBFF', '#3D1FB8', t('totalVoucher'), stats.total, t('allVouchers'), 'stat-total', 'all')}
        ${statCardHTML('check-circle', '#DCFCE7', '#15803D', t('available'), stats.available, t('readyToUse'), 'stat-available', 'available')}
        ${statCardHTML('check-circle-2', '#FEF3C7', '#B45309', t('used'), stats.used, t('alreadyUsed'), 'stat-used', 'used')}
        ${statCardHTML('clock', '#FEE2E2', '#B91C1C', t('expired'), stats.expired, t('expiredDesc'), 'stat-expired', 'expired')}
      </section>

      <!-- Filters -->
      <section class="card p-4 sm:p-5 mb-5 grid grid-cols-1 md:grid-cols-3 gap-3 fade-in">
        <div class="relative md:col-span-1">
          <i data-lucide="search" class="w-5 h-5 text-ink-soft absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"></i>
          <input data-testid="filter-search" class="input pl-10" placeholder="${t('searchPlaceholder')}" value="${escapeHtml(state.search)}"
                oninput="searchVoucher(this)" />
        </div>
        <select data-testid="filter-period" class="input cursor-pointer" onchange="state.filterPeriod=this.value;state.page=1;render();">
          <option value="all" ${state.filterPeriod==='all'?'selected':''}>${t('allPeriods')}</option>
          ${PERIOD_ORDER.map(p => `<option value="${p}" ${state.filterPeriod===p?'selected':''}>${t(PERIODS[p].labelKey)}</option>`).join('')}
        </select>
        <select data-testid="filter-status" class="input cursor-pointer" onchange="state.filterStatus=this.value;state.page=1;render();">
          <option value="all" ${state.filterStatus==='all'?'selected':''}>${t('allStatus')}</option>
          <option value="available" ${state.filterStatus==='available'?'selected':''}>${t('statusAvailable')}</option>
          <option value="used" ${state.filterStatus==='used'?'selected':''}>${t('statusUsed')}</option>
          <option value="expired" ${state.filterStatus==='expired'?'selected':''}>${t('statusExpired')}</option>
        </select>
      </section>

      <!-- Table -->
      <section class="card p-4 sm:p-6 overflow-x-auto fade-in">
        <table class="tbl" data-testid="voucher-table">
          <thead>
            <tr>
              <th class="w-12">${t('no')}</th>
              
${sortableHeader(t('voucher'), 'voucher')}
${sortableHeader(t('period'), 'period', 'hide-mobile')}
${sortableHeader(t('status'), 'status')}
${sortableHeader(t('buyer'), 'buyer', 'hide-mobile')}

              <th class="hide-mobile">${t('purchasedAt')}</th>
              <th class="hide-mobile">${t('qrCode')}</th>
              <th class="text-right pr-4">${t('checkout')}</th>
            </tr>
          </thead>
          <tbody>
            ${pageItems.length === 0
              ? `<tr><td colspan="8" class="text-center text-ink-soft py-12">${state.vouchers.length === 0 ? t('empty') : t('noResults')}</td></tr>`
              : pageItems.map((v, i) => rowHTML(v, pageStart + i + 1)).join('')}
          </tbody>
        </table>

        ${pageItems.length > 0 ? paginationHTML(filtered.length, totalPages) : ''}
      </section>
      `;
}

function statCardHTML(icon, bgColor, fgColor, title, value, sub, testid, filter) {
return `
<div class="stat-card cursor-pointer transition-all duration-200 ${
    state.statusFilter === filter? 'ring-2 ring-brand shadow-lg': 'hover:shadow-md'}"
    data-testid="${testid}"
    onclick="toggleStatusFilter('${filter}')">

  <div class="stat-icon" style="background:${bgColor};color:${fgColor};">
    <i data-lucide="${icon}" class="w-6 h-6"></i>
  </div>
  <div class="min-w-0 flex-1">
    <div class="text-xs text-ink-soft font-semibold uppercase tracking-wider">
      ${title}
    </div>
    <div class="font-display font-bold text-3xl text-ink leading-none my-1">
      ${value}
    </div>
    <div class="text-xs text-ink-soft">
      ${sub}
    </div>
  </div>
</div>`;
}

function sidebarHTML() {
return `
<div id="sidebar-backdrop" class="fixed inset-0 bg-black/40 z-30 hidden lg:hidden" onclick="toggleSidebar()"> </div>
<aside id="sidebar"
class="
fixed 
lg:fixed
self-start
left-0 top-0
z-40
w-64
h-screen
flex-shrink-0
bg-white
border-r border-brand/5
p-5

-translate-x-full
lg:translate-x-0

transition-transform duration-300
lg:flex
flex-col">
    <div class="mb-8">${cloudLogoHTML('w-7 h-7')}</div>
    <nav class="flex flex-col gap-1.5 flex-1">
      <a data-testid="nav-dashboard" class="nav-item ${state.sidebarView==='dashboard'?'active':''}" onclick="setState({sidebarView:'dashboard',page:1}); if (window.innerWidth < 1024) toggleSidebar();">
        <i data-lucide="layout-grid" class="w-5 h-5"></i> ${t('dashboard')}
      </a>
      <a data-testid="nav-backup" class="nav-item ${state.sidebarView==='backup'?'active':''}" onclick="setState({sidebarView:'backup'}); if (window.innerWidth < 1024) toggleSidebar();">
        <i data-lucide="cloud-download" class="w-5 h-5"></i> ${t('backup')}
      </a>
      <a data-testid="nav-settings" class="nav-item ${state.sidebarView==='settings'?'active':''}" onclick="setState({sidebarView:'settings'});if(window.innerWidth<1024)toggleSidebar();">
        <i data-lucide="settings" class="w-5 h-5"></i> ${t('settings')}
      </a>
    </nav>

    <div class="bg-brand-light rounded-2xl p-4 mb-4 text-sm">
      <div class="flex items-center gap-2 font-semibold text-brand mb-2"><i data-lucide="wifi" class="w-4 h-4"></i> ${BRAND.footerName}</div>
      <div class="text-ink-soft text-xs leading-relaxed">
        <div>${t('routerLabel')}: <span class="font-semibold text-ink">MikroTik hEX</span></div>
        <div>${t('uptime')}: <span class="font-semibold text-ink">2d 14h 32m</span></div>
        <div class="flex items-center gap-1.5 mt-1.5"><span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>${t('connected')}</div>
      </div>
    </div>

    <div class="flex items-center justify-between bg-surface-bg rounded-2xl p-3">
      <div class="flex items-center gap-3 min-w-0">
        <div class="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand font-bold font-display">A</div>
        <div class="min-w-0">
          <div class="font-semibold text-ink text-sm truncate">${t('admin')}</div>
          <div class="text-xs text-ink-soft truncate">${t('owner')}</div>
        </div>
      </div>
      <button data-testid="logout-btn" onclick="logout()" class="btn-ghost" title="${t('logout')}">
        <i data-lucide="log-out" class="w-4 h-4"></i>
      </button>
    </div>
  </aside>`;
}

function applyFilters(list) {
  let arr = list.slice();
  const q = state.search.trim().toLowerCase();
  if (q) arr = arr.filter(v => v.code.toLowerCase().includes(q) || (v.buyerName || '').toLowerCase().includes(q));
  if (state.filterPeriod !== 'all') arr = arr.filter(v => v.period === state.filterPeriod);
  if (state.filterStatus !== 'all') arr = arr.filter(v => computeStatus(v) === state.filterStatus);
  if (state.statusFilter !== 'all') arr = arr.filter(v => computeStatus(v) === state.statusFilter);
  // sort by period if requested, else by createdAt desc
  if (state.sortPeriod !== 0) {
    arr.sort((a, b) => state.sortPeriod * (PERIOD_ORDER.indexOf(a.period) - PERIOD_ORDER.indexOf(b.period)));
  } else {
    arr.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  }
  if (state.sortVoucher !== 0) {
  arr.sort((a, b) =>
    state.sortVoucher *
    a.code.localeCompare(b.code, undefined, {
      numeric: true,
      sensitivity: 'base'
    })
  );
  }

if (state.sortStatus !== 0) {

  const order = {
    available: 0,
    used: 1,
    expired: 2
  };

  arr.sort((a, b) =>
    state.sortStatus *
    (order[computeStatus(a)] - order[computeStatus(b)])
  );

}

if (state.sortBuyer !== 0) {
  arr.sort((a, b) =>
    state.sortBuyer *
    (a.buyerName || '').localeCompare(
      b.buyerName || '',
      undefined,
      { sensitivity: 'base' }
    )
  );
}
  
  return arr;
}

function rowHTML(v, no) {
  const status = computeStatus(v);
  const periodInfo = PERIODS[v.period] || PERIODS['1H'];
  const statusLabel = status === 'available' ? t('statusAvailable') : status === 'used' ? t('statusUsed') : t('statusExpired');
  return `<tr data-testid="row-${escapeHtml(v.code)}">
    <td class="text-ink-soft">${no}</td>
    <td><span class="font-display font-bold text-ink">${escapeHtml(v.code)}</span></td>
    <td class="hide-mobile"><span class="pill ${periodInfo.pillClass}">${t(periodInfo.labelKey)}</span></td>
    <td><span class="pill pill-${status}">${statusLabel}</span></td>
    <td class="hide-mobile text-ink">${escapeHtml(v.buyerName || '-')}</td>
    <td class="hide-mobile text-ink-soft text-xs">${v.purchasedAt ? formatDateID(v.purchasedAt) : '-'}</td>
    <td class="hide-mobile"><div class="w-12 h-12 bg-white border border-brand/10 rounded-lg p-1 cursor-pointer hover:scale-110 transition-transform" onclick="openCheckPreview('${escapeHtml(v.code)}')"><img data-qr-text="${escapeHtml(v.code)}" alt="qr" class="w-full h-full"/></div></td>
    <td class="text-right pr-2">
      ${status === 'available'
        ? `<button data-testid="sell-${escapeHtml(v.code)}" onclick="openSellModal('${escapeHtml(v.code)}')" class="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-all font-semibold text-sm"><i data-lucide="shopping-cart" class="w-4 h-4"></i> ${t('sell')}</button>`
        : `<button data-testid="purchased-${escapeHtml(v.code)}" onclick="openCheckPreview('${escapeHtml(v.code)}')" class="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-bg text-ink-soft hover:bg-brand-light hover:text-brand transition-all font-semibold text-sm"><i data-lucide="badge-check" class="w-4 h-4"></i> ${t('purchased')}</button>`}
      <button data-testid="edit-${escapeHtml(v.code)}" onclick="openEditModal('${escapeHtml(v.code)}')" class="btn-ghost ml-1" title="${t('edit')}"><i data-lucide="pencil" class="w-4 h-4"></i></button>
    </td>
  </tr>`;
}

function paginationHTML(total, totalPages) {
  const p = state.page;
  const pages = [];
  const push = (n) => pages.push(`<button data-testid="page-${n}" class="page-btn ${n===p?'active':''}" onclick="state.page=${n};render();">${n}</button>`);
  // simple smart pagination
  if (totalPages <= 7) { for (let i = 1; i <= totalPages; i++) push(i); }
  else {
    push(1);
    if (p > 3) pages.push(`<span class="text-ink-soft px-1">…</span>`);
    for (let i = Math.max(2, p-1); i <= Math.min(totalPages-1, p+1); i++) push(i);
    if (p < totalPages-2) pages.push(`<span class="text-ink-soft px-1">…</span>`);
    push(totalPages);
  }
  return `<div class="flex flex-col sm:flex-row items-center justify-between gap-3 mt-5 pt-3">
    <div class="text-sm text-ink-soft">${t('showing')} ${((p-1)*PER_PAGE)+1} – ${Math.min(total, p*PER_PAGE)} ${t('of')} ${total} ${t('vouchers')}</div>
    <div class="flex items-center gap-1.5">
      <button data-testid="page-prev" class="page-btn" ${p===1?'disabled':''} onclick="state.page=Math.max(1,state.page-1);render();"><i data-lucide="chevron-left" class="w-4 h-4"></i></button>
      ${pages.join('')}
      <button data-testid="page-next" class="page-btn" ${p===totalPages?'disabled':''} onclick="state.page=Math.min(${totalPages},state.page+1);render();"><i data-lucide="chevron-right" class="w-4 h-4"></i></button>
    </div>
  </div>`;
}

function searchVoucher(input) {
  state.search = input.value;
  state.page = 1;

  render();

  const el = document.querySelector('[data-testid="filter-search"]');
  if (el) {
    el.focus();
    el.setSelectionRange(el.value.length, el.value.length);
  }
}

async function renderQRThumbnails() {
  // table QR thumbnails (small)
  const imgs = document.querySelectorAll('table img[data-qr-text]:not([data-qr-done])');
  for (const img of imgs) {
    const text = img.getAttribute('data-qr-text');
    img.src = await makeQR(text, 120);
    img.setAttribute('data-qr-done', '1');
  }
}

/* ================================================================== *
 *  Backup & settings view
 * ================================================================== */
function backupViewHTML() {
  return `
  <section class="card p-6 sm:p-8 fade-in max-w-3xl">
    <div class="flex items-start gap-4 mb-6">
      <div class="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center"><i data-lucide="database" class="w-7 h-7 text-brand"></i></div>
      <div>
        <h2 class="font-display font-bold text-2xl text-ink">${t('backupTitle')}</h2>
        <p class="text-ink-soft mt-1">${t('backupDesc')}</p>
      </div>
    </div>

    <div class="grid sm:grid-cols-2 gap-4">
      <button data-testid="backup-json-btn" onclick="downloadJSON()" class="btn-primary py-5"><i data-lucide="file-json-2" class="w-5 h-5"></i> ${t('downloadJson')}</button>
      <button data-testid="backup-xlsx-btn" onclick="downloadExcel()" class="btn-secondary py-5"><i data-lucide="file-spreadsheet" class="w-5 h-5"></i> ${t('downloadExcel')}</button>
    </div>

    <div class="mt-6 p-5 border border-dashed border-brand/20 rounded-2xl bg-brand-light/30">
      <div class="font-semibold text-ink mb-2 flex items-center gap-2"><i data-lucide="upload-cloud" class="w-5 h-5 text-brand"></i>${t('restoreJson')}</div>
      <input data-testid="restore-input" type="file" accept="application/json" onchange="restoreJSON(event)" class="block w-full text-sm text-ink-soft file:mr-4 file:py-2.5 file:px-5 file:rounded-xl file:border-0 file:font-semibold file:bg-brand file:text-white hover:file:bg-brand-hover transition-colors cursor-pointer"/>
    </div>
  </section>`;
}

function settingsViewHTML(){return`
<section class="space-y-5 fade-in">

<div class="card p-6">
<h2 class="font-display text-xl font-bold mb-4">${t('brand')}</h2>

<div class="space-y-4">

<div>
<label class="text-sm text-ink-soft">${t('appName')}</label>
<input class="input mt-1" value="${escapeHtml(BRAND.appName)}" disabled>
</div>

<div>
<label class="text-sm text-ink-soft">${t('copyright')}</label>
<input class="input mt-1" value="${escapeHtml(BRAND.companyName)}" disabled>
</div>

</div>
</div>

<div class="card p-6">
<h2 class="font-display text-xl font-bold mb-4">${t('locations')}</h2>


${state.locations.map(l=>`
<div onclick="openLocationEdit('${l.id}')" class="rounded-xl border border-brand/10 p-4 flex items-center justify-between mb-3 cursor-pointer hover:bg-brand-light/30 transition">
  <div>
    <div class="font-semibold text-ink">${escapeHtml(l.name)}</div>
    <div class="text-sm text-ink-soft">${l.id==='all'?'Super Administrator':'Location'}</div>
  </div>

<div class="flex items-center gap-3">
<span class="pill ${l.id==='all'?'pill-available':'pill-1M'}"> ${l.id==='all'?'System':'Active'} </span>
<i data-lucide="chevron-right" class="w-5 h-5 text-ink-soft"></i>
</div>
</div>
`).join('')}

<div class="mt-4">
<button class="btn-primary" onclick="openLocationModal()">
<i data-lucide="plus" class="w-4 h-4"></i>
${t('addLocation')}
</button>
</div>

</div>

</section>`;
}

/* ================================================================== *
 *  Modals
 * ================================================================== */
function openModal(html) {
  const root = document.getElementById('modal-root');
  root.innerHTML = `<div class="modal-backdrop fade-in" data-testid="modal-backdrop" onclick="if(event.target===this)closeModal()">
    <div class="modal scale-in" data-testid="modal-content">${html}</div>
  </div>`;
  if (window.lucide) lucide.createIcons();
}
function closeModal() { document.getElementById('modal-root').innerHTML = ''; }

/* --- Add voucher --- */
function openAddModal() {
  openModal(`
    <div class="p-6 sm:p-8">
      <div class="flex items-center justify-between mb-5">
        <div>
          <h2 class="font-display font-bold text-2xl text-ink">${t('addVoucherTitle')}</h2>
          <p class="text-ink-soft text-sm mt-1">${t('addVoucherDesc')}</p>
        </div>
        <button class="btn-ghost" onclick="closeModal()"><i data-lucide="x" class="w-5 h-5"></i></button>
      </div>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-semibold text-ink mb-2">${t('periodLabel')}</label>
          <div class="grid grid-cols-3 gap-2" data-testid="add-period-tabs">
            ${PERIOD_ORDER.map((p, i) => `<button data-testid="add-period-${p}" data-period="${p}" onclick="this.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('!bg-brand','!text-white'));this.classList.add('!bg-brand','!text-white');" class="btn-secondary ${i===1?'!bg-brand !text-white':''}">${t(PERIODS[p].labelKey)}</button>`).join('')}
          </div>
        </div>
        <div>
          <label class="block text-sm font-semibold text-ink mb-2" for="add-count">${t('howManyVouchers')}</label>
          <input id="add-count" data-testid="add-count" type="number" min="1" max="500" value="1" class="input" />
        </div>
        <div>
          <label class="block text-sm font-semibold text-ink mb-2" for="add-custom">${t('customCode')}</label>
          <input id="add-custom" data-testid="add-custom-code" placeholder="(auto-generate)" class="input" />
        </div>
      </div>
      <div class="flex gap-3 mt-6">
        <button class="btn-secondary flex-1" onclick="closeModal()">${t('cancel')}</button>
        <button data-testid="add-save-btn" class="btn-primary flex-1" onclick="saveNewVouchers()"><i data-lucide="plus" class="w-4 h-4"></i> ${t('save')}</button>
      </div>
    </div>
  `);
}

async function saveNewVouchers() {
  const periodBtn = document.querySelector('[data-testid="add-period-tabs"] button.\\!bg-brand') || document.querySelector('[data-testid="add-period-1M"]');
  const period = periodBtn.getAttribute('data-period') || '1M';
  const count = Math.max(1, Math.min(500, parseInt(document.getElementById('add-count').value || '1', 10)));
  const custom = (document.getElementById('add-custom').value || '').trim();
  const created = [];
  if (custom && count === 1) {
    if (await DB.getVoucher(custom)) { toast('Code exists', 'error'); return; }
    await DB.putVoucher({ code: custom, username: custom, password: '', period, purchasedAt: null, buyerName: '', buyerPhone: '', createdAt: new Date().toISOString() });
    created.push(custom);
  } else {
    let tries = 0;
    while (created.length < count && tries < count * 20) {
      tries++;
      const code = randCode(period, 4);
      if (await DB.getVoucher(code)) continue;
      await DB.putVoucher({ code, username: code, password: '', period, purchasedAt: null, buyerName: '', buyerPhone: '', createdAt: new Date().toISOString() });
      created.push(code);
    }
  }
  closeModal();
  await refreshVouchers();
  toast(`${created.length} ${t('vouchersCreated')}`, 'success');
  render();
}

function openAdminLogin(){
  toast('Admin login coming soon','info');
}

async function saveLocation(){
  const name=document.getElementById('location-name').value.trim();
  if(!name)return toast(t('required'),'error');

  const id=name.toLowerCase().replace(/\s+/g,'-');

  await DB.putLocation({
    id,
    name,
    host:'',
    password:'',
    active:true
  });

  await refreshLocations();
  closeModal();
  render();
}

async function saveLocationEdit(id){
  const l=state.locations.find(x=>x.id===id);
  if(!l)return;

  l.name=document.getElementById('edit-location-name').value.trim()||l.name;
  l.host=normalizeHost(document.getElementById('edit-location-host').value);

  await DB.putLocation(l);
  await refreshLocations();

  closeModal();
  render();

  toast(t('saved'),'success');
}

function openLocationEdit(id){
  const l=state.locations.find(x=>x.id===id);
  if(!l)return;

  openModal(`
  <div class="p-6 sm:p-8">
    <div class="flex items-center justify-between mb-5">
      <h2 class="font-display font-bold text-2xl">${escapeHtml(l.name)}</h2>
      <button class="btn-ghost" onclick="closeModal()">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>

    <div class="space-y-4">

      <div>
        <label class="block text-sm font-semibold mb-2">${t('locationName')}</label>
        <input id="edit-location-name" class="input" value="${escapeHtml(l.name)}">
      </div>

      <div>
        <label class="block text-sm font-semibold mb-2">Router Address</label>
        <input id="edit-location-host" class="input"
        placeholder="192.168.88.1"
        value="${escapeHtml(l.host||'')}">
      </div>

      <div class="flex justify-end gap-3 mt-6">
        <button class="btn-secondary" onclick="closeModal()">${t('cancel')}</button>
        <button class="btn-primary" onclick="saveLocationEdit('${l.id}')">${t('save')}</button>
      </div>

    </div>
  </div>`);
}

/* --- Sell voucher (WhatsApp send) --- */
function openSellModal(code) {
  const v = state.vouchers.find(x => x.code === code);
  if (!v) return;
  const days = PERIODS[v.period]?.days || 0;
  openModal(`
    <div class="p-6 sm:p-7">
      <div class="flex items-center justify-between mb-5">
        <h2 class="font-display font-bold text-2xl text-ink">${t('sellModalTitle')}</h2>
        <button class="btn-ghost" onclick="closeModal()"><i data-lucide="x" class="w-5 h-5"></i></button>
      </div>
      <div class="mb-6 px-2 py-2">${voucherCardHTML(v, 'available', days, 'sell-card')}</div>
      <div class="space-y-3">
        <div>
          <label class="block text-sm font-semibold text-ink mb-1.5">${t('name')}</label>
          <input id="sell-name" data-testid="sell-name" placeholder="${t('namePlaceholder')}" class="input"/>
        </div>
        <div>
          <label class="block text-sm font-semibold text-ink mb-1.5">${t('phoneNumber')}</label>
          <input id="sell-phone" data-testid="sell-phone" placeholder="${t('phonePlaceholder')}" class="input" inputmode="tel"/>
        </div>
        <div>
          <label class="block text-sm font-semibold text-ink mb-1.5">${t('messageOptional')}</label>
          <textarea id="sell-msg" data-testid="sell-msg" rows="3" class="input" placeholder="${t('messagePlaceholder')}"></textarea>
        </div>
      </div>
      <div class="flex gap-3 mt-5">
        <button class="btn-secondary flex-1" onclick="closeModal()">${t('cancel')}</button>
        <button data-testid="send-voucher-btn" class="btn-primary flex-1" onclick="sendVoucher('${escapeHtml(code)}')"><i data-lucide="send" class="w-4 h-4"></i> ${t('sendVoucher')}</button>
      </div>
    </div>
  `);
  fillVoucherQRs(document.getElementById('modal-root'));
}

async function sendVoucher(code) {
  const name = (document.getElementById('sell-name').value || '').trim();
  const phone = (document.getElementById('sell-phone').value || '').trim();
  const msg = (document.getElementById('sell-msg').value || '').trim();

  if (!name) {
    toast(t('nameRequired'), 'error');
    return;
  }

  if (!phone) {
    toast(t('phoneRequired'), 'error');
    return;
  }

  const v = state.vouchers.find(x => x.code === code);
  if (!v) return;

  // Login credentials
  const username = v.username || v.code;
  const password = v.password || "";

  const loginText = password
    ? `Username: *${username}*\nPassword: *${password}*`
    : `Voucher: *${username}*`;

  const days = PERIODS[v.period]?.days || 0;

  // WhatsApp message
  const defaultMsg = msg || (
    state.lang === 'en'
      ? `Hi ${name}! Thank you for buying a ${BRAND.labelName} voucher.
${loginText}
Valid for: ${days} days
Scan the QR code attached to connect.`
    
      : state.lang === 'jw'
      ? `Halo ${name}! Matur nuwun wis tuku voucher ${BRAND.labelName}.
${loginText}
Kanggo: ${days} dino
Monggo scan QR code sing dilampirno kanggo nyambung.`
    
      : `Halo ${name}! Terima kasih sudah membeli voucher ${BRAND.labelName}.
${loginText}
Berlaku: ${days} hari
Silakan scan QR code terlampir untuk terhubung.`
  );

  const url =
    `https://wa.me/${normalizePhone(phone)}?text=${encodeURIComponent(defaultMsg)}`;

  state.pendingWhatsAppUrl = url;
// const waTab = window.open("about:blank", "_blank");


  // Generate voucher image
  const cardEl = document.getElementById('voucher-card-sell-card');

  await fillVoucherQRs(cardEl.parentElement);

  await Promise.all(
    [...cardEl.querySelectorAll("img")].map(img => {
      if (img.complete) return Promise.resolve();

      return new Promise(resolve => {
        img.onload = resolve;
        img.onerror = resolve;
      });
    })
  );

  await new Promise(r => setTimeout(r, 50));

  const dataURL = await htmlToImage.toPng(cardEl, {
    pixelRatio: 4,
    backgroundColor: null,
    cacheBust: true
  });

    // Save voucher
  v.purchasedAt = new Date().toISOString();
  v.buyerName = name;
  v.buyerPhone = phone;
  v.message = msg;

  await DB.putVoucher(v);
  await refreshVouchers();

  // Download voucher
  downloadDataURL(dataURL, `voucher-${v.code}.png`);

  closeModal();
  toast(t('voucherSent'), 'success');
  render();

  // Open WhatsApp after download starts
  //if (waTab) { waTab.location.replace(url);}
  openWhatsAppModal();
  return;
}

/* --- Edit voucher --- */
function openEditModal(code) {
  const v = state.vouchers.find(x => x.code === code);
  if (!v) return;
  openModal(`
    <div class="p-6 sm:p-7">
      <div class="flex items-center justify-between mb-5">
        <h2 class="font-display font-bold text-2xl text-ink">${t('editVoucherTitle')}</h2>
        <button class="btn-ghost" onclick="closeModal()"><i data-lucide="x" class="w-5 h-5"></i></button>
      </div>
      <div class="space-y-3">
        <div>
          <label class="block text-sm font-semibold text-ink mb-1.5">${t('voucherCode')}</label>
          <input value="${escapeHtml(v.code)}" disabled class="input opacity-70"/>
        </div>

  <div class="space-y-2">
  <label class="text-sm font-semibold">Username</label>
  <input
      id="edit-username"
      class="input"
      value="${escapeHtml(v.username || v.code)}">
</div>

<div class="space-y-2 mt-4">
  <label class="text-sm font-semibold">Password</label>
  <input
      id="edit-password"
      class="input"
      value="${escapeHtml(v.password || '')}">
</div>
        
        <div>
          <label class="block text-sm font-semibold text-ink mb-1.5">${t('periodLabel')}</label>
          <select id="edit-period" data-testid="edit-period" class="input cursor-pointer">
            ${PERIOD_ORDER.map(p => `<option value="${p}" ${v.period===p?'selected':''}>${t(PERIODS[p].labelKey)}</option>`).join('')}
          </select>
        </div>
        <div>
          <label class="block text-sm font-semibold text-ink mb-1.5">${t('name')}</label>
          <input id="edit-name" data-testid="edit-name" value="${escapeHtml(v.buyerName||'')}" class="input"/>
        </div>
        <div>
          <label class="block text-sm font-semibold text-ink mb-1.5">${t('phoneNumber')}</label>
          <input id="edit-phone" data-testid="edit-phone" value="${escapeHtml(v.buyerPhone||'')}" class="input"/>
        </div>
        <label class="flex items-center gap-2 cursor-pointer pt-2">
          <input id="edit-reset" data-testid="edit-reset" type="checkbox" class="w-4 h-4 accent-brand"/>
          <span class="text-sm text-ink-soft">${t('markAvailable')}</span>
        </label>
      </div>
      <div class="flex gap-3 mt-5">
        <button data-testid="edit-delete-btn" onclick="deleteVoucher('${escapeHtml(code)}')" class="px-4 py-2.5 rounded-xl text-red-600 hover:bg-red-50 transition-all font-semibold inline-flex items-center gap-1.5"><i data-lucide="trash-2" class="w-4 h-4"></i> ${t('deleteVoucher')}</button>
        <div class="flex-1"></div>
        <button class="btn-secondary" onclick="closeModal()">${t('cancel')}</button>
        <button data-testid="edit-save-btn" class="btn-primary" onclick="saveEdit('${escapeHtml(code)}')"><i data-lucide="check" class="w-4 h-4"></i> ${t('save')}</button>
      </div>
    </div>
  `);
}

async function saveEdit(code) {
  const v = state.vouchers.find(x => x.code === code);
  if (!v) return;
  v.username = document.getElementById("edit-username").value.trim(); if (!v.username)v.username = v.code;
  v.password = document.getElementById("edit-password").value.trim();
  v.period = document.getElementById('edit-period').value;
  v.buyerName = document.getElementById('edit-name').value.trim();
  v.buyerPhone = document.getElementById('edit-phone').value.trim();

  if (document.getElementById('edit-reset').checked) { v.purchasedAt = null; v.buyerName = ''; v.buyerPhone = ''; v.message = ''; }
  await DB.putVoucher(v);
  await refreshVouchers();
  closeModal();
  toast(t('saved'), 'success');
  render();
}

async function deleteVoucher(code) {
  if (!confirm(t('confirmDelete') + ' (' + code + ')')) return;
  await DB.deleteVoucher(code);
  await refreshVouchers();
  closeModal();
  toast(t('deleted'), 'success');
  render();
}

/* --- Import Excel --- */
function openImportModal() {
  openModal(`
    <div class="p-6 sm:p-7">
      <div class="flex items-center justify-between mb-5">
        <h2 class="font-display font-bold text-2xl text-ink">${t('importTitle')}</h2>
        <button class="btn-ghost" onclick="closeModal()"><i data-lucide="x" class="w-5 h-5"></i></button>
      </div>
      <p class="text-ink-soft text-sm mb-4">${t('importDesc')}</p>
      <button data-testid="download-template-btn" onclick="downloadTemplate()" class="btn-secondary mb-4"><i data-lucide="download" class="w-4 h-4"></i> ${t('downloadTemplate')}</button>
      <input data-testid="import-file" type="file" accept=".xlsx,.xls,.csv" onchange="handleImportFile(event)" class="block w-full text-sm text-ink-soft file:mr-4 file:py-2.5 file:px-5 file:rounded-xl file:border-0 file:font-semibold file:bg-brand file:text-white hover:file:bg-brand-hover transition-colors cursor-pointer"/>
      <div id="import-result" class="mt-4 text-sm"></div>
    </div>
  `);
}

function openLocationModal(){
  openModal(`
  <div class="p-6 sm:p-8">
    <div class="flex items-center justify-between mb-5">
      <h2 class="font-display font-bold text-2xl">${t('addLocation')}</h2>
      <button class="btn-ghost" onclick="closeModal()">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>

    <label class="block text-sm font-semibold mb-2">
      ${t('locationName')}
    </label>

    <input id="location-name" class="input" placeholder="${t('locationName')}">

    <div class="flex justify-end gap-3 mt-6">
      <button class="btn-secondary" onclick="closeModal()">${t('cancel')}</button>
      <button class="btn-primary" onclick="saveLocation()">${t('save')}</button>
    </div>
  </div>`);
}

function downloadTemplate() {
  const ws = XLSX.utils.json_to_sheet([
    { code: '1M-example', username: '', password: '', period: '1M', buyer: '', phone: '', purchasedAt: '' },
    { code: '', username: '', password: '', period: '1H', buyer: '', phone: '', purchasedAt: '' },
  ]);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'vouchers');
  const buf = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  downloadBlob(new Blob([buf], { type: 'application/octet-stream' }), 'voucher-template.xlsx');
}

async function handleImportFile(ev) {
  const file = ev.target.files?.[0];
  if (!file) return;
  const buf = await file.arrayBuffer();
  const wb = XLSX.read(buf, { type: 'array' });
  const ws = wb.Sheets[wb.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(ws);
  let added = 0, updated = 0;
  for (const r of rows) {
    const period = (r.period || r.Period || r.PERIOD || '').toString().trim().toUpperCase();
    if (!PERIODS[period]) { skipped++; continue; }
    let code = (r.code || r.Code || r.CODE || '').toString().trim();
    if (!code) code = randCode(period, 4);
    const existing = await DB.getVoucher(code);
    const purchasedAt = (r.purchasedAt || r.PurchasedAt || '') ? new Date(r.purchasedAt || r.PurchasedAt).toISOString() : null;
await DB.putVoucher({
  ...(existing || {}),
  code,
  username: (r.username || r.Username || existing?.username || code).toString().trim(),
  password: (r.password || r.Password || existing?.password || "").toString().trim(),
  period,
  buyerName: (r.buyer || r.Buyer || r.name || existing?.buyerName || "").toString(),
  buyerPhone: (r.phone || r.Phone || existing?.buyerPhone || "").toString(),
  purchasedAt,
  createdAt: existing?.createdAt || (r.createdAt || r.CreatedAt || new Date().toISOString())
  });
    if (existing) updated++;
    else  
      added++;
  }
  await refreshVouchers();
  document.getElementById('import-result').innerHTML = `<div class="p-3 bg-emerald-50 text-emerald-700 rounded-xl">Added: <b>${added}</b> • Updated: <b>${updated}</b></div>`;
  render();
}

/* --- Backup / Restore --- */
async function downloadJSON() {
  const data = { exportedAt: new Date().toISOString(), vouchers: state.vouchers, adminPassword: await DB.getSetting('adminPassword') };
  downloadBlob(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }), `${DB_NAME}_bak-${new Date().toISOString().slice(0,10)}.json`);
  toast(t('saved'), 'success');
}

function downloadExcel() {
  const rows = state.vouchers.map(v => ({
    code: v.code, username: v.username || v.code, password: v.password || "", period: v.period, status: computeStatus(v), buyer: v.buyerName || '', phone: v.buyerPhone || '',
    purchasedAt: v.purchasedAt || '', createdAt: v.createdAt || '',
  }));
  const ws = XLSX.utils.json_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'vouchers');
  const buf = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  downloadBlob(new Blob([buf], { type: 'application/octet-stream' }), `${DB_NAME}-${new Date().toISOString().slice(0,10)}.xlsx`);
}

async function restoreJSON(ev) {
  const file = ev.target.files?.[0];
  if (!file) return;
  if (!confirm(t('restoreWarning'))) { ev.target.value = ''; return; }
  const text = await file.text();
  let data;
  try { data = JSON.parse(text); } catch { toast('Invalid JSON', 'error'); return; }
  if (!Array.isArray(data.vouchers)) { toast('Invalid backup file', 'error'); return; }
  await DB.clearVouchers();
  for (const v of data.vouchers) await DB.putVoucher(v);
  if (data.adminPassword) await DB.setSetting('adminPassword', data.adminPassword);
  await refreshVouchers();
  toast(t('restoreDone'), 'success');
  ev.target.value = '';
  render();
}

/* --- Settings (change password & lang) --- */
function openSettingsModal() {
  openModal(`
    <div class="p-6 sm:p-7">
      <div class="flex items-center justify-between mb-5">
        <h2 class="font-display font-bold text-2xl text-ink">${t('settings')}</h2>
        <button class="btn-ghost" onclick="closeModal()"><i data-lucide="x" class="w-5 h-5"></i></button>
      </div>

<div class="pt-3 border-t border-brand/10">

<div class="font-semibold text-ink mb-3">
Router Configuration
</div>

<div class="space-y-3">

<input
id="router-url"
class="input"
placeholder="http://192.168.0.1/login">

<button
class="btn-primary w-full"
onclick="saveRouterSettings()">

<i data-lucide="save" class="w-4 h-4"></i>
Save Router

</button>

</div>

</div>
        
        <div class="pt-3 border-t border-brand/10">
          <div class="font-semibold text-ink mb-3">${t('changePassword')}</div>
          <div class="space-y-3">
            <input id="set-old" data-testid="set-old" type="password" placeholder="${t('oldPassword')}" class="input"/>
            <input id="set-new" data-testid="set-new" type="password" placeholder="${t('newPassword')}" class="input"/>
            <button data-testid="set-save-pwd" onclick="changePassword()" class="btn-primary w-full"><i data-lucide="key-round" class="w-4 h-4"></i> ${t('save')}</button>
          </div>
        </div>
      </div>
    </div>
  `);
}

async function changePassword() {
  const oldP = document.getElementById('set-old').value;
  const newP = document.getElementById('set-new').value;
  if (!newP) return;
  const current = (await DB.getSetting('adminPassword')) || DEFAULT_ADMIN_PASSWORD;
  if (oldP !== current) { toast(t('wrongPassword'), 'error'); return; }
  await DB.setSetting('adminPassword', newP);
  closeModal();
  toast(t('passwordChanged'), 'success');
}

async function saveRouterSettings(){
  const url=document.getElementById("router-url").value.trim();
  if(!url){
    toast("Please enter a router URL","warn");
    return;
  }
  await DB.setSetting("routerUrl",url);
  toast("Router URL saved","success");
}

/* --- Check Preview (admin clicks QR or Purchased in table) --- */
async function openCheckPreview(code) {
  const v = await DB.getVoucher(code);
  if (!v) return;
  const status = computeStatus(v);
  const days = PERIODS[v.period]?.days || 0;
  openModal(`
    <div class="p-6 sm:p-7">
      <div class="flex items-center justify-between mb-4">
        <h2 class="font-display font-bold text-2xl text-ink">${t('cekVoucherTitle')}</h2>
        <button class="btn-ghost" onclick="closeModal()"><i data-lucide="x" class="w-5 h-5"></i></button>
      </div>
      ${voucherCardHTML(v, status, days, 'preview-modal')}
      <div class="grid grid-cols-2 gap-3 mt-5">
        <div class="bg-surface-bg rounded-xl p-3">
          <div class="text-xs text-ink-soft font-semibold uppercase tracking-wider">${t('buyerLabel')}</div>
          <div class="font-bold text-ink truncate">${escapeHtml(v.buyerName || t('notSoldYet'))}</div>
        </div>
        <div class="bg-surface-bg rounded-xl p-3">
          <div class="text-xs text-ink-soft font-semibold uppercase tracking-wider">${t('purchasedAtLabel')}</div>
          <div class="font-bold text-ink text-sm">${v.purchasedAt ? formatDateID(v.purchasedAt) : '-'}</div>
        </div>
      </div>
      <button onclick="downloadVoucherImage('${escapeHtml(code)}','preview-modal')" data-testid="preview-download-btn" class="btn-secondary w-full mt-4"><i data-lucide="download" class="w-4 h-4"></i> ${t('download')}</button>
    </div>
  `);
  fillVoucherQRs(document.getElementById('modal-root'));
}

function openWhatsAppModal() {
  openModal(`
    <div class="p-7 sm:p-8 text-center">

      <div class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
        <i data-lucide="badge-check" class="w-9 h-9 text-emerald-600"></i>
      </div>

      <h2 class="font-display font-bold text-2xl text-ink">
        Voucher Ready
      </h2>

      <p class="text-ink-soft mt-2">
        Voucher downloaded successfully.
      </p>

      <div class="mt-7 flex gap-3">

        <button
          onclick="openPendingWhatsApp()"
          class="btn-primary flex-1">

          <i data-lucide="message-circle" class="w-5 h-5"></i>
          Send voucher

        </button>

        <button
          onclick="closeModal()"
          class="btn-secondary">

          Close

        </button>

      </div>

    </div>
  `);
}

function openPendingWhatsApp() {
  if (!state.pendingWhatsAppUrl) return;

  window.open(state.pendingWhatsAppUrl, "_blank");

  state.pendingWhatsAppUrl = "";

  closeModal();
}

async function downloadVoucherImage(code, idSuffix) {
  const cardEl = document.getElementById('voucher-card-' + idSuffix);
  if (!cardEl) return;
  await fillVoucherQRs(cardEl.parentElement);

// Wait until every image inside the voucher has loaded
await Promise.all(
  [...cardEl.querySelectorAll("img")].map(img => {
    if (img.complete) return Promise.resolve();

    return new Promise(resolve => {
      img.onload = resolve;
      img.onerror = resolve;
    });
  })
);

await new Promise(r => setTimeout(r, 50));
  const dataURL = await htmlToImage.toPng(cardEl, {
    pixelRatio: 4,
    backgroundColor: null,
    cacheBust: true
  });
  downloadDataURL(
    dataURL,
    `voucher-${code}.png`
  );
  toast(t('saved'), 'success');
}

/* ================================================================== *
 *  Event binding (delegated)
 * ================================================================== */
function bindEvents() { /* mostly inline onclick; nothing extra for now */ }

/* ================================================================== *
 *  Boot
 * ================================================================== */
(async function boot() {
  await seedIfEmpty();
  await refreshLocations();
  await refreshVouchers();
  render();
})();

// expose globals for inline handlers
window.handleEntry = handleEntry;
window.logout = logout;
window.setState = setState;
window.changeLang = changeLang;
window.openAddModal = openAddModal;
window.openImportModal = openImportModal;
window.openSettingsModal = openSettingsModal;
window.openLocationModal = openLocationModal;
window.openAdminLogin=openAdminLogin;
window.openLocationEdit = openLocationEdit;
window.openSellModal = openSellModal;
window.openEditModal = openEditModal;
window.openCheckPreview = openCheckPreview;
window.saveNewVouchers = saveNewVouchers;
window.saveLocation=saveLocation;
window.saveLocationEdit=saveLocationEdit;
window.sendVoucher = sendVoucher;
window.saveEdit = saveEdit;
window.deleteVoucher = deleteVoucher;
window.handleImportFile = handleImportFile;
window.downloadTemplate = downloadTemplate;
window.downloadJSON = downloadJSON;
window.downloadExcel = downloadExcel;
window.restoreJSON = restoreJSON;
window.changePassword = changePassword;
window.saveRouterSettings = saveRouterSettings;
window.closeModal = closeModal;
window.togglePeriodSort = togglePeriodSort;
window.downloadVoucherImage = downloadVoucherImage;
window.state = state;
window.render = render;
