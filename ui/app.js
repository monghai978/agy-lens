(()=>{const l={lens:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22"/>',activity:'<path d="M22 12h-4l-3 7-6-14-3 7H2"/>',barChart:'<path d="M4 20h16"/><path d="M7 20v-7"/><path d="M12 20V6"/><path d="M17 20v-10"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',sliders:'<path d="M4 7h16M4 12h16M4 17h16"/><circle cx="9" cy="7" r="2" fill="var(--bg)"/><circle cx="15" cy="12" r="2" fill="var(--bg)"/><circle cx="11" cy="17" r="2" fill="var(--bg)"/>',refresh:'<path d="M20 11a8 8 0 0 0-14.9-3M4 4v4h4"/><path d="M4 13a8 8 0 0 0 14.9 3M20 20v-4h-4"/>',layers:'<path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z"/><path d="m3 12 9 4.5 9-4.5"/><path d="m3 16.5 9 4.5 9-4.5"/>',zap:'<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>',database:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/>',dollar:'<path d="M12 2v20"/><path d="M16.5 6.5c0-1.66-2.01-3-4.5-3s-4.5 1.34-4.5 3 2.01 3 4.5 3 4.5 1.34 4.5 3-2.01 3-4.5 3-4.5-1.34-4.5-3"/>',cpu:'<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5" rx="0.5"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',chevronRight:'<path d="m9 6 6 6-6 6"/>',chevronDown:'<path d="m6 9 6 6 6-6"/>',terminal:'<path d="m5 7 5 5-5 5"/><path d="M12 17h7"/>',fileText:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/>',edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"/>',gitBranch:'<circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="8" r="2.5"/><circle cx="6" cy="18" r="2.5"/><path d="M6 8.5v7"/><path d="M18 10.5c0 4-3 5-12 5"/>',box:'<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="M12 12 20 7.5M12 12v9M12 12 4 7.5"/>',download:'<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M4 19h16"/>',copy:'<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',check:'<path d="m5 12 5 5L20 7"/>',arrowUpRight:'<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',alert:'<path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.3 3.9 2.3 18a2 2 0 0 0 1.7 3h16a2 2 0 0 0 1.7-3l-8-14.1a2 2 0 0 0-3.4 0Z"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',moon:'<path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z"/>',rotateCcw:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',trendingUp:'<path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/>',pieChart:'<path d="M21 12A9 9 0 1 1 12 3v9Z"/><path d="M21.2 9A9 9 0 0 0 15 2.8V9Z"/>',arrowLeft:'<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'};function b(j,M=14,gt=""){const ct=l[j]||l.box;return`<svg class="ic ${gt}" width="${M}" height="${M}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ct}</svg>`}window.AgyLensIcons={iconSvg:b}})(),(()=>{function l(d){return String(d??"").replaceAll("&","&amp;").replaceAll('"',"&quot;").replaceAll("'","&#39;").replaceAll("<","&lt;").replaceAll(">","&gt;")}function b(d){if(d==null||!Number.isFinite(d))return"\u2014";const p=Math.abs(d);return p>=1e9?`${(d/1e9).toFixed(2)}B`:p>=1e6?`${(d/1e6).toFixed(2)}M`:p>=1e3?`${(d/1e3).toFixed(1)}k`:String(Math.round(d))}function j(d){return d==null||!Number.isFinite(d)?"\u2014":d===0?"$0.00":d<.01?`$${d.toFixed(4)}`:d<10?`$${d.toFixed(3)}`:`$${d.toFixed(2)}`}function M(d){if(d==null||!Number.isFinite(d))return"\u2014";if(d<1e3)return`${Math.round(d)}ms`;const p=d/1e3;if(p<60)return`${p.toFixed(1)}s`;const T=Math.floor(p/60),C=Math.round(p%60);return`${T}m ${C}s`}const gt=["var(--accent)","var(--seg-cache)","var(--warn)","#8b5cf6","var(--seg-output)"];function ct(d){return gt[d%gt.length]}function Ct(d=[]){const p=new Map;for(const n of d)n?.date&&p.set(n.date,n);const T=new Date;T.setHours(0,0,0,0);const C=new Date(T);C.setDate(C.getDate()+(6-C.getDay()));const m=371,f=new Date(C);f.setDate(C.getDate()-m+1);const v=[],I=Math.max(...d.map(n=>n.tokens||0),1);for(let n=0;n<m;n++){const u=new Date(f);u.setDate(f.getDate()+n);const R=Math.floor(n/7),V=n%7,N=u.getFullYear(),x=String(u.getMonth()+1).padStart(2,"0"),G=String(u.getDate()).padStart(2,"0"),S=`${N}-${x}-${G}`,q=u.getTime()>T.getTime(),U=p.get(S);let D=0;if(!q&&U&&U.tokens>0){const z=Math.sqrt(U.tokens/I);D=z>.72?4:z>.45?3:z>.2?2:1}const at=U?`${S} \xB7 ${b(U.tokens)} tok \xB7 ${U.requests} req \xB7 ${j(U.costUsd)}${U.errors?` \xB7 ${U.errors} err`:""}`:`${S} \xB7 0 tok`;v.push({col:R,row:V,level:D,isFuture:q,tip:at,date:S,isFirstOfMonth:u.getDate()===1})}const B=16,k=13,h=5.4,L=h+1.4,P=B+53*L+2,E=k+7*L+2,Y=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],g=[];let A=-4;for(const n of v)if(n.isFirstOfMonth&&!n.isFuture&&n.col-A>=3){A=n.col;const u=Number(n.date.slice(5,7))-1;g.push(`<text class="chart-axis" x="${(B+n.col*L).toFixed(1)}" y="9">${Y[u]||""}</text>`)}const J=[[1,"M"],[3,"W"],[5,"F"]].map(([n,u])=>`<text class="chart-axis" x="11" y="${(k+n*L+h-.8).toFixed(1)}" text-anchor="end">${u}</text>`).join(""),X=v.map(n=>{if(n.isFuture)return"";const u=B+n.col*L,R=k+n.row*L;return`<rect class="hm-cell hm-l${n.level}" x="${u.toFixed(1)}" y="${R.toFixed(1)}" width="${h}" height="${h}" rx="1.2" data-tip="${l(n.tip)}"/>`}).join("");return`
      <svg class="chart-svg" viewBox="0 0 ${P.toFixed(1)} ${E.toFixed(1)}" role="img" aria-label="53-week activity heatmap">
        ${g.join("")}${J}${X}
      </svg>
      <div class="hm-foot">
        <span class="hm-scale">
          <i class="hm-swatch hm-l0"></i>
          <i class="hm-swatch hm-l1"></i>
          <i class="hm-swatch hm-l2"></i>
          <i class="hm-swatch hm-l3"></i>
          <i class="hm-swatch hm-l4"></i>
        </span>
      </div>
    `}function St(d,p="tokens"){if(!Array.isArray(d)||!d.length)return"";const T=520,C=148,m=44,f=10,v=12,I=22,B=T-m-f,k=C-v-I,h=d.slice(-21),i=h.length<=7?1:h.length<=14?2:3;if(p==="cache"){const n=h.map((S,q)=>{const U=(S.inputTokens||0)+(S.cacheReadTokens||0),D=U>0?Number(((S.cacheReadTokens||0)/U*100).toFixed(1)):0,at=h.length===1?m+B/2:m+q/(h.length-1)*B,z=v+k*(1-Math.min(100,D)/100);return{d:S,pct:D,x:at,y:z,idx:q}}),u=[0,50,100].map(S=>{const q=v+k*(1-S/100);return`
          <line class="chart-grid" x1="${m}" y1="${q.toFixed(1)}" x2="${T-f}" y2="${q.toFixed(1)}"/>
          <text class="chart-axis" x="${m-6}" y="${(q+3).toFixed(1)}" text-anchor="end">${S}%</text>
        `}).join(""),R=v+k*(1-.7),V=`<line class="chart-ref" x1="${m}" y1="${R.toFixed(1)}" x2="${T-f}" y2="${R.toFixed(1)}"/>`,N=n.map((S,q)=>`${q===0?"M":"L"}${S.x.toFixed(1)},${S.y.toFixed(1)}`).join(" "),x=n.length>1?`${N} L${n[n.length-1].x.toFixed(1)},${(v+k).toFixed(1)} L${n[0].x.toFixed(1)},${(v+k).toFixed(1)} Z`:"",G=n.map(S=>{const q=S.idx%i===0||S.idx===n.length-1,U=`${S.d.date} \xB7 Cache ${S.pct}% \xB7 Read ${b(S.d.cacheReadTokens)} \xB7 In ${b(S.d.inputTokens)}`;return`
          <circle class="chart-dot chart-dot-ok" cx="${S.x.toFixed(1)}" cy="${S.y.toFixed(1)}" r="3.2" data-tip="${l(U)}"/>
          ${q?`<text class="chart-axis" x="${S.x.toFixed(1)}" y="${C-5}" text-anchor="middle">${S.d.date.slice(5)}</text>`:""}
        `}).join("");return`
        <svg class="chart-svg" viewBox="0 0 ${T} ${C}" role="img" aria-label="Daily cache hit trend">
          ${u}${V}
          ${x?`<path class="chart-area chart-area-ok" d="${x}"/>`:""}
          ${n.length>1?`<path class="chart-line chart-line-ok" d="${N}"/>`:""}
          ${G}
        </svg>
      `}const L=n=>p==="cost"?n.costUsd||0:p==="requests"?n.requests||0:n.tokens||0,P=n=>p==="cost"?j(n):p==="requests"?String(Math.round(n)):b(n),E=Math.max(...h.map(L),p==="cost"?.01:1),Y=B/h.length,g=Math.max(5,Math.min(28,Y*.64)),A=[0,.5,1].map(n=>{const u=v+k*(1-n);return`
        <line class="chart-grid" x1="${m}" y1="${u.toFixed(1)}" x2="${T-f}" y2="${u.toFixed(1)}"/>
        <text class="chart-axis" x="${m-6}" y="${(u+3).toFixed(1)}" text-anchor="end">${P(E*n)}</text>
      `}).join(""),J=h.map((n,u)=>{const R=m+u*Y+(Y-g)/2,N=u%i===0||u===h.length-1?`<text class="chart-axis" x="${(R+g/2).toFixed(1)}" y="${C-5}" text-anchor="middle">${n.date.slice(5)}</text>`:"",x=`${n.date} \xB7 ${b(n.tokens)} tok (Cache ${b(n.cacheReadTokens)} \xB7 In ${b(n.inputTokens)} \xB7 Out ${b(n.outputTokens)}) \xB7 ${n.requests} req \xB7 ${j(n.costUsd)}${n.errors?` \xB7 ${n.errors} err`:""}`;if(p==="tokens"){const D=n.tokens||0,at=Math.max(D>0?2:0,D/E*k);if(!at)return N;const z=D>0?at*((n.cacheReadTokens||0)/D):0,st=D>0?at*((n.inputTokens||0)/D):0,vt=Math.max(0,at-z-st),mt=v+k-z,wt=mt-st,t=wt-vt;return`
          <g class="chart-bar-group" data-tip="${l(x)}">
            ${z>0?`<rect class="seg-fill-cache" x="${R.toFixed(1)}" y="${mt.toFixed(1)}" width="${g.toFixed(1)}" height="${z.toFixed(1)}"/>`:""}
            ${st>0?`<rect class="seg-fill-input" x="${R.toFixed(1)}" y="${wt.toFixed(1)}" width="${g.toFixed(1)}" height="${st.toFixed(1)}"/>`:""}
            ${vt>0?`<rect class="seg-fill-output" x="${R.toFixed(1)}" y="${t.toFixed(1)}" width="${g.toFixed(1)}" height="${vt.toFixed(1)}" rx="1.5"/>`:""}
          </g>
          ${N}
        `}const G=L(n),S=Math.max(G>0?2:0,G/E*k),q=v+k-S,U=p==="requests"&&n.errors>0?`<circle class="chart-dot-err" cx="${(R+g/2).toFixed(1)}" cy="${Math.max(v+3,q-4).toFixed(1)}" r="2.5"/>`:"";return`
        <rect class="chart-bar" x="${R.toFixed(1)}" y="${q.toFixed(1)}" width="${g.toFixed(1)}" height="${S.toFixed(1)}" rx="2" data-tip="${l(x)}"/>
        ${U}
        ${N}
      `}).join("");return`<svg class="chart-svg" viewBox="0 0 ${T} ${C}" role="img" aria-label="Daily usage chart">${A}${J}</svg>${p==="tokens"?'<div class="chart-legend"><span class="legend-item"><i class="dot dot-cache"></i>Cache</span><span class="legend-item"><i class="dot dot-input"></i>Input</span><span class="legend-item"><i class="dot dot-output"></i>Output</span></div>':""}`}function ft({centerVal:d,centerSub:p,segments:T}){const v=2*Math.PI*34,I=T.reduce((h,i)=>h+Math.max(0,i.value||0),0);let B=0;const k=I>0?T.filter(h=>h.value>0).map(h=>{const L=h.value/I*v,E=`<circle class="donut-seg" style="${h.color?`stroke:${h.color};`:""}" cx="44" cy="44" r="34" stroke-dasharray="${L.toFixed(2)} ${(v-L).toFixed(2)}" stroke-dashoffset="${(-B).toFixed(2)}" data-tip="${l(h.tip)}"/>`;return B+=L,E}).join(""):"";return`
      <svg class="donut-svg" width="88" height="88" viewBox="0 0 88 88" role="img" aria-label="${l(p)}">
        <circle class="donut-track" cx="44" cy="44" r="34"/>
        <g transform="rotate(-90 44 44)">${k}</g>
        <text class="donut-center-val" x="44" y="45" text-anchor="middle">${l(d)}</text>
        <text class="donut-center-sub" x="44" y="57" text-anchor="middle">${l(p)}</text>
      </svg>
    `}function Lt(d=[],p={}){if(!d.length&&!(p.totalTokens>0))return"";const T=d.slice(0,5),C=d.slice(5).reduce((P,E)=>P+(E.tokens||0),0),m=d.slice(5).reduce((P,E)=>P+(E.costUsd||0),0),f=T.map((P,E)=>({value:P.tokens||0,color:ct(E),tip:`${P.model}: ${b(P.tokens)} (${P.sharePercent}%)`}));C>0&&f.push({value:C,color:"var(--line-strong)",tip:`Other: ${b(C)}`});const v=T.map((P,E)=>({value:P.costUsd||0,color:ct(E),tip:`${P.model}: ${j(P.costUsd)} (${P.costSharePercent||0}%)`}));m>0&&v.push({value:m,color:"var(--line-strong)",tip:`Other: ${j(m)}`});const I=(p.costUsd||0)>0,B=p.cacheReadTokens||0,k=p.inputTokens||0,h=p.outputTokens||0,i=B+k+h,L=i>0?`
      <div class="mix-strip">
        <div class="stack-bar" role="img" aria-label="Token mix">
          ${B>0?`<div class="stack-seg seg-fill-cache" style="width:${(B/i*100).toFixed(2)}%" data-tip="Cache ${b(B)}"></div>`:""}
          ${k>0?`<div class="stack-seg seg-fill-input" style="width:${(k/i*100).toFixed(2)}%" data-tip="Input ${b(k)}"></div>`:""}
          ${h>0?`<div class="stack-seg seg-fill-output" style="width:${(h/i*100).toFixed(2)}%" data-tip="Output ${b(h)}"></div>`:""}
        </div>
        <div class="chart-legend">
          <span class="legend-item"><i class="dot dot-cache"></i>Cache ${b(B)} (${(B/i*100).toFixed(0)}%)</span>
          <span class="legend-item"><i class="dot dot-input"></i>In ${b(k)}</span>
          <span class="legend-item"><i class="dot dot-output"></i>Out ${b(h)}</span>
          ${p.thinkingTokens>0?`<span class="legend-item">Think ${b(p.thinkingTokens)}</span>`:""}
        </div>
      </div>
    `:"";return`
      <div class="dual-donut-wrap">
        <div class="dual-donuts ${I?"":"single"}">
          <div class="donut-box">
            ${ft({centerVal:b(p.totalTokens),centerSub:"Token",segments:f})}
          </div>
          ${I?`
            <div class="donut-box">
              ${ft({centerVal:j(p.costUsd),centerSub:"USD",segments:v})}
            </div>
          `:""}
        </div>
        ${L}
      </div>
    `}function Ft(d,p=1e6,T=80){if(!Array.isArray(d)||d.length<2)return"";const C=520,m=132,f=44,v=10,I=12,B=20,k=C-f-v,h=m-I-B,i=Math.max(...d.map(u=>u.usedTokens||0),1),L=p>0?p*(T/100):0,P=p>0&&i>=p*.55?p:Math.max(i*1.18,1e3),E=[0,.5,1].map(u=>{const R=I+h*(1-u);return`
        <line class="chart-grid" x1="${f}" y1="${R.toFixed(1)}" x2="${C-v}" y2="${R.toFixed(1)}"/>
        <text class="chart-axis" x="${f-6}" y="${(R+3).toFixed(1)}" text-anchor="end">${b(P*u)}</text>
      `}).join(""),Y=L>0&&L<=P?`<line class="chart-ref chart-ref-warn" x1="${f}" y1="${(I+h*(1-L/P)).toFixed(1)}" x2="${C-v}" y2="${(I+h*(1-L/P)).toFixed(1)}"/>`:"",g=d.map((u,R)=>{const V=f+R/(d.length-1)*k,N=I+h*(1-Math.min(1,(u.usedTokens||0)/P));return{s:u,x:V,y:N,i:R}}),A=g.map((u,R)=>`${R===0?"M":"L"}${u.x.toFixed(1)},${u.y.toFixed(1)}`).join(" "),J=`${A} L${g[g.length-1].x.toFixed(1)},${(I+h).toFixed(1)} L${g[0].x.toFixed(1)},${(I+h).toFixed(1)} Z`,X=Math.max(1,Math.ceil(g.length/6)),n=g.map(u=>{const R=p>0?` (${(u.s.usedTokens/p*100).toFixed(1)}%)`:"",V=`Req #${u.s.idx} \xB7 ${b(u.s.usedTokens)}${R}${u.s.cacheHitPercent!=null?` \xB7 Cache ${u.s.cacheHitPercent}%`:""}`,N=u.i===0||u.i===g.length-1||u.i%X===0;return`
        <circle class="chart-dot ${u.s.error?"chart-dot-err":""}" cx="${u.x.toFixed(1)}" cy="${u.y.toFixed(1)}" r="${g.length>25?2.4:3}" data-tip="${l(V)}"/>
        ${N?`<text class="chart-axis" x="${u.x.toFixed(1)}" y="${m-4}" text-anchor="middle">#${u.s.idx}</text>`:""}
      `}).join("");return`
      <svg class="chart-svg" viewBox="0 0 ${C} ${m}" role="img" aria-label="Session context trend">
        ${E}${Y}
        <path class="chart-area" d="${J}"/>
        <path class="chart-line" d="${A}"/>
        ${n}
      </svg>
    `}function Rt(d){if(!Array.isArray(d)||!d.length)return"";const p=d.slice(-24),T=520,C=132,m=44,f=10,v=12,I=20,B=T-m-f,k=C-v-I,h=Math.max(...p.map(g=>g.totalTokens||0),1),i=B/p.length,L=Math.max(5,Math.min(28,i*.64)),P=p.length<=10?1:p.length<=18?2:3,E=[0,.5,1].map(g=>{const A=v+k*(1-g);return`
        <line class="chart-grid" x1="${m}" y1="${A.toFixed(1)}" x2="${T-f}" y2="${A.toFixed(1)}"/>
        <text class="chart-axis" x="${m-6}" y="${(A+3).toFixed(1)}" text-anchor="end">${b(h*g)}</text>
      `}).join(""),Y=p.map((g,A)=>{const J=m+A*i+(i-L)/2,X=g.totalTokens||0,n=Math.max(X>0?2:0,X/h*k),R=A%P===0||A===p.length-1?`<text class="chart-axis" x="${(J+L/2).toFixed(1)}" y="${C-4}" text-anchor="middle">#${g.turnNumber}</text>`:"";if(!n)return R;const V=n*((g.cacheReadTokens||0)/X),N=n*((g.inputTokens||0)/X),x=Math.max(0,n-V-N),G=v+k,S=`Turn #${g.turnNumber} \xB7 ${b(X)} tok (Cache ${b(g.cacheReadTokens)} \xB7 In ${b(g.inputTokens)} \xB7 Out ${b(g.outputTokens)})${g.costUsd!=null?` \xB7 ${j(g.costUsd)}`:""}`;return`
        <g class="chart-bar-group" data-tip="${l(S)}">
          ${V>0?`<rect class="seg-fill-cache" x="${J.toFixed(1)}" y="${(G-V).toFixed(1)}" width="${L.toFixed(1)}" height="${V.toFixed(1)}"/>`:""}
          ${N>0?`<rect class="seg-fill-input" x="${J.toFixed(1)}" y="${(G-V-N).toFixed(1)}" width="${L.toFixed(1)}" height="${N.toFixed(1)}"/>`:""}
          ${x>0?`<rect class="seg-fill-output" x="${J.toFixed(1)}" y="${(G-V-N-x).toFixed(1)}" width="${L.toFixed(1)}" height="${x.toFixed(1)}" rx="1.5"/>`:""}
        </g>
        ${R}
      `}).join("");return`
      <svg class="chart-svg" viewBox="0 0 ${T} ${C}" role="img" aria-label="Per-turn token chart">${E}${Y}</svg>
      <div class="chart-legend"><span class="legend-item"><i class="dot dot-cache"></i>Cache</span><span class="legend-item"><i class="dot dot-input"></i>Input</span><span class="legend-item"><i class="dot dot-output"></i>Output</span></div>
    `}function It(d){const p=(d||[]).filter(n=>Number.isFinite(n.tps)&&n.tps>0);if(p.length<2)return"";const T=520,C=132,m=44,f=10,v=12,I=20,B=T-m-f,k=C-v-I,h=Math.max(...p.map(n=>n.tps),10),i=p.reduce((n,u)=>n+u.tps,0)/p.length,L=h*1.15,P=[0,.5,1].map(n=>{const u=v+k*(1-n);return`
        <line class="chart-grid" x1="${m}" y1="${u.toFixed(1)}" x2="${T-f}" y2="${u.toFixed(1)}"/>
        <text class="chart-axis" x="${m-6}" y="${(u+3).toFixed(1)}" text-anchor="end">${Math.round(L*n)}</text>
      `}).join(""),E=v+k*(1-i/L),Y=`<line class="chart-ref" x1="${m}" y1="${E.toFixed(1)}" x2="${T-f}" y2="${E.toFixed(1)}"/>`,g=p.map((n,u)=>({s:n,i:u,x:m+u/(p.length-1)*B,y:v+k*(1-n.tps/L)})),A=g.map((n,u)=>`${u===0?"M":"L"}${n.x.toFixed(1)},${n.y.toFixed(1)}`).join(" "),J=Math.max(1,Math.ceil(g.length/6)),X=g.map(n=>{const u=`Req #${n.s.idx} \xB7 ${n.s.tps} t/s${n.s.ttftMs!=null?` \xB7 TTFT ${M(n.s.ttftMs)}`:""} \xB7 Out ${b(n.s.outputTokens)}`,R=n.i===0||n.i===g.length-1||n.i%J===0;return`
        <circle class="chart-dot chart-dot-ok" cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="${g.length>25?2.4:3}" data-tip="${l(u)}"/>
        ${R?`<text class="chart-axis" x="${n.x.toFixed(1)}" y="${C-4}" text-anchor="middle">#${n.s.idx}</text>`:""}
      `}).join("");return`
      <svg class="chart-svg" viewBox="0 0 ${T} ${C}" role="img" aria-label="Session speed trend">
        ${P}${Y}
        <path class="chart-line chart-line-ok" d="${A}"/>
        ${X}
      </svg>
    `}function e(d){if(!Array.isArray(d)||!d.length)return"";const p=d.slice(0,5),T=d.slice(5).reduce((f,v)=>f+(v.sharePercent||0),0),C=d.slice(5).reduce((f,v)=>f+(v.tokens||0),0);let m=p.map((f,v)=>{const I=ct(v),B=`${f.model}: ${f.sharePercent}% (${b(f.tokens)})`;return`<div class="stack-seg" style="width:${Math.max(1,f.sharePercent)}%;background:${I}" data-tip="${l(B)}"></div>`}).join("");if(C>0||T>0){const f=`Other: ${T.toFixed(1)}% (${b(C)})`;m+=`<div class="stack-seg" style="width:${Math.max(1,T)}%;background:var(--line-strong)" data-tip="${l(f)}"></div>`}return`<div class="stack-bar" role="img" aria-label="Model share">${m}</div>`}window.AgyLensCharts={fmtTokens:b,fmtCost:j,fmtDuration:M,modelShade:ct,renderHeatmapChart:Ct,renderDailyBarChart:St,renderModelDonuts:Lt,renderSessionContextChart:Ft,renderSessionTurnsChart:Rt,renderSessionSpeedChart:It,renderModelStackBar:e}})(),(()=>{const{iconSvg:l}=window.AgyLensIcons,{fmtCost:b,fmtDuration:j,fmtTokens:M,modelShade:gt,renderHeatmapChart:ct,renderDailyBarChart:Ct,renderModelDonuts:St,renderSessionContextChart:ft,renderSessionSpeedChart:Lt,renderSessionTurnsChart:Ft,renderModelStackBar:Rt}=window.AgyLensCharts,It={vi:{tabs:{session:"Phi\xEAn",usage:"T\u1ED5ng quan",search:"T\xECm ki\u1EBFm",config:"Xu\u1EA5t & Gi\xE1"},context:"Ng\u1EEF c\u1EA3nh",breakdown:"Chi ti\u1EBFt",checkpoints:"N\xE9n",cacheHit:"Cache Hit",cacheWarm:"Cache",cacheExpired:"H\u1EBFt TTL",speed:"T\u1ED1c \u0111\u1ED9",tokens:"Token",cost:"Chi ph\xED",turns:"L\u01B0\u1EE3t h\u1ED9i tho\u1EA1i",sessionTrend:"Bi\u1EC3u \u0111\u1ED3 phi\xEAn",chartCtx:"Ng\u1EEF c\u1EA3nh",chartTurns:"L\u01B0\u1EE3t",chartSpeed:"T\u1ED1c \u0111\u1ED9",tokenMix:"Ph\xE2n b\u1ED5 Token & Chi ph\xED",heatmap:"Ho\u1EA1t \u0111\u1ED9ng 53 tu\u1EA7n",toolBurn:"Ti\xEAu hao theo Tool",topSessions:"Top phi\xEAn t\u1ED1n nh\u1EA5t",budgetTitle:"Ng\xE2n s\xE1ch",budgetDaily:"H\xF4m nay",budgetWeekly:"7 ng\xE0y",dailyBudget:"Ng\xE2n s\xE1ch ng\xE0y ($)",weeklyBudget:"Ng\xE2n s\xE1ch tu\u1EA7n ($)",overhead:"N\u1EC1n",chatLbl:"Chat",perTurn:"/l\u01B0\u1EE3t",turnsLeft:"l\u01B0\u1EE3t",toolCats:{cmd:"L\u1EC7nh",read:"\u0110\u1ECDc file",edit:"S\u1EEDa file",search:"T\xECm ki\u1EBFm",subagent:"Subagent",other:"Kh\xE1c"},subagents:"Subagents",combined:"G\u1ED9p",backParent:"Phi\xEAn g\u1ED1c",noSession:"Ch\u01B0a c\xF3 phi\xEAn n\xE0o",noTools:"Kh\xF4ng g\u1ECDi tool",ranges:{"5h":"5h",today:"H\xF4m nay","24h":"24h","7d":"7N","30d":"30N",all:"T\u1EA5t c\u1EA3"},allModels:"M\u1ECDi model",allConvs:"M\u1ECDi phi\xEAn",requests:"Request",daily:"Theo ng\xE0y",byModel:"Theo Model",recentLog:"Nh\u1EADt k\xFD Request",logSearchPlaceholder:"L\u1ECDc model, phi\xEAn, l\u1ED7i\u2026",filterAll:"T\u1EA5t c\u1EA3",filterErr:"L\u1ED7i",filterDrop:"T\u1EE5t cache",colModel:"Model",colReq:"Req",colTokens:"Token",colCache:"Cache",colCost:"Chi ph\xED",searchPlaceholder:"T\xECm prompt, code, l\u1EC7nh\u2026",scopes:{all:"T\u1EA5t c\u1EA3",text:"N\u1ED9i dung",code:"Code",cmd:"L\u1EC7nh"},open:"M\u1EDF",copied:"\u0110\xE3 ch\xE9p",noResults:"Kh\xF4ng t\xECm th\u1EA5y k\u1EBFt qu\u1EA3",searchPrompt:"Nh\u1EADp t\u1ED1i thi\u1EC3u 2 k\xFD t\u1EF1",exportTitle:"Xu\u1EA5t & T\xE1ch phi\xEAn",exportAll:"To\xE0n b\u1ED9 l\u01B0\u1EE3t",exportUntil:"\u0110\u1EBFn l\u01B0\u1EE3t",exportMd:"Markdown",exportJsonl:"JSONL",exportFork:"Ch\xE9p Fork",ratesTitle:"\u0110\u01A1n gi\xE1 ($ / 1M token)",pricingMode:"Ch\u1EBF \u0111\u1ED9 gi\xE1",modeStandard:"Chu\u1EA9n",modePromo:"\u01AFu \u0111\xE3i",syncRates:"\u0110\u1ED3ng b\u1ED9 gi\xE1",saveRates:"L\u01B0u gi\xE1",resetAll:"M\u1EB7c \u0111\u1ECBnh",saved:"\u0110\xE3 l\u01B0u",invalidRate:"\u0110\u01A1n gi\xE1 ph\u1EA3i l\xE0 s\u1ED1 h\u1EE3p l\u1EC7 trong kho\u1EA3ng 0\u20131000",prefsTitle:"T\xF9y ch\u1ECDn",language:"Ng\xF4n ng\u1EEF",warnAt:"C\u1EA3nh b\xE1o ng\u1EEF c\u1EA3nh",ctxLimit:"Gi\u1EDBi h\u1EA1n ng\u1EEF c\u1EA3nh",auto:"T\u1EF1 \u0111\u1ED9ng (DB)",retry:"Th\u1EED l\u1EA1i",errors:"l\u1ED7i",kinds:{prompt:"Prompt",reply:"Tr\u1EA3 l\u1EDDi",code:"Code",cmd:"L\u1EC7nh"}},en:{tabs:{session:"Session",usage:"Usage",search:"Search",config:"Export & Rates"},context:"Context",breakdown:"Breakdown",checkpoints:"Compactions",cacheHit:"Cache Hit",cacheWarm:"Cache",cacheExpired:"TTL expired",speed:"Speed",tokens:"Tokens",cost:"Est. Cost",turns:"Turns",sessionTrend:"Session Charts",chartCtx:"Context",chartTurns:"Turns",chartSpeed:"Speed",tokenMix:"Token & Cost Split",heatmap:"53-Week Activity",toolBurn:"Tool Consumption",topSessions:"Top Sessions",budgetTitle:"Budget",budgetDaily:"Today",budgetWeekly:"7D",dailyBudget:"Daily Budget ($)",weeklyBudget:"Weekly Budget ($)",overhead:"Base",chatLbl:"Chat",perTurn:"/turn",turnsLeft:"turns",toolCats:{cmd:"Command",read:"Read",edit:"Edit",search:"Search",subagent:"Subagent",other:"Other"},subagents:"Subagents",combined:"Total",backParent:"Parent",noSession:"No conversations yet",noTools:"No tool calls",ranges:{"5h":"5h",today:"Today","24h":"24h","7d":"7D","30d":"30D",all:"All"},allModels:"All models",allConvs:"All sessions",requests:"Requests",daily:"Daily",byModel:"By Model",recentLog:"Request Events",logSearchPlaceholder:"Filter model, session, error\u2026",filterAll:"All",filterErr:"Errors",filterDrop:"Cache Drop",colModel:"Model",colReq:"Req",colTokens:"Tokens",colCache:"Cache",colCost:"Cost",searchPlaceholder:"Search prompts, code, commands\u2026",scopes:{all:"All",text:"Text",code:"Code",cmd:"Cmd"},open:"Open",copied:"Copied",noResults:"No matching results",searchPrompt:"Enter at least 2 characters",exportTitle:"Export & Fork Session",exportAll:"All turns",exportUntil:"Up to turn",exportMd:"Markdown",exportJsonl:"JSONL",exportFork:"Copy Fork",ratesTitle:"Rates ($ / 1M tokens)",pricingMode:"Pricing Mode",modeStandard:"Standard",modePromo:"Promo",syncRates:"Sync Rates",saveRates:"Save Rates",resetAll:"Reset",saved:"Saved",invalidRate:"Rates must be finite numbers between 0 and 1000",prefsTitle:"Preferences",language:"Language",warnAt:"Context Warning",ctxLimit:"Context Limit",auto:"Auto (DB)",retry:"Retry",errors:"err",kinds:{prompt:"Prompt",reply:"Reply",code:"Code",cmd:"Cmd"}}},e={tab:"session",settings:{language:"vi",pricingMode:"standard",contextWarnPercent:80,contextLimitOverride:1e6,dailyBudgetUsd:0,weeklyBudgetUsd:0,customRates:{}},catalog:[],pricingMeta:{syncedAt:null,status:"builtin"},syncingRates:!1,selectedConvId:window.sidecar?.conversationId||"",parentConvId:"",session:null,sessionRev:0,sessionLoading:!0,sessionChart:"context",pickerOpen:!1,pendingRender:!1,ctxExpanded:(()=>{try{return localStorage.getItem("agy_lens_ctx_expanded")!=="0"}catch{return!0}})(),openCats:new Set,openTurns:new Set,usage:null,usageLoading:!1,usageRange:"7d",usageModel:"",usageConv:"",logQuery:"",usageMetric:"tokens",logFilter:"all",searchQuery:"",searchScope:"all",searchData:null,searchLoading:!1,exportTurn:"",exportNotice:null,error:"",statusBadge:""};let d=0,p=0,T=0,C=[],m="";function f(t,{parentId:s=""}={}){e.selectedConvId=t,e.parentConvId=s,e.sessionRev=0,e.openTurns.clear(),e.exportTurn="",e.exportNotice=null,m=""}const v=document.getElementById("content"),I=document.getElementById("btn-refresh"),B=document.getElementById("btn-theme"),k=document.getElementById("chart-tooltip");function h(){return It[e.settings.language==="en"?"en":"vi"]}function i(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function L(t){if(!Number.isFinite(t))return"\u2014";const s=Math.max(0,Math.floor((Date.now()-t)/1e3));return s<60?e.settings.language==="en"?"now":"v\u1EEBa xong":s<3600?`${Math.floor(s/60)}m`:s<86400?`${Math.floor(s/3600)}h`:`${Math.floor(s/86400)}d`}function P(t){if(!Number.isFinite(t))return"\u2014";const s=new Date(t);return`${String(s.getHours()).padStart(2,"0")}:${String(s.getMinutes()).padStart(2,"0")}`}async function E(t){if(!t)return!1;try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(t),!0}catch{}try{const s=document.createElement("textarea");s.value=t,s.setAttribute("readonly",""),s.style.cssText="position:fixed;left:-9999px;top:0;opacity:0",document.body.appendChild(s),s.focus(),s.select();const a=document.execCommand("copy");return s.remove(),!!a}catch{return!1}}function Y(t,s=3e5){if(!Number.isFinite(t))return null;const a=Math.max(0,Date.now()-t),o=s-a;if(o<=0)return{warm:!1,label:h().cacheExpired};const c=Math.ceil(o/1e3),F=Math.floor(c/60),y=c%60;return{warm:!0,label:`${h().cacheWarm} ${F}:${String(y).padStart(2,"0")}`}}async function g(t,s={}){const o=await(window.sidecar?.fetch||((F,y)=>fetch(F,{...y,headers:{"Content-Type":"application/json",...y?.headers||{}}})))(t,{method:"POST",body:JSON.stringify(s)}),c=await o.json().catch(()=>({}));if(!o.ok)throw new Error(c.error||`HTTP ${o.status}`);return c}function A(){const t=h();if(document.documentElement.lang=e.settings.language,document.getElementById("brand-icon").innerHTML=l("lens",16),I.innerHTML=l("refresh",14),I.title=e.settings.language==="en"?"Refresh":"L\xE0m m\u1EDBi",window.sidecar?.previewMode){B.hidden=!1;const a=document.documentElement.dataset.theme==="dark";B.innerHTML=l(a?"sun":"moon",14),B.title=a?"Light":"Dark"}const s={session:"activity",usage:"barChart",search:"search",config:"sliders"};document.querySelectorAll(".tab").forEach(a=>{const o=a.dataset.tab;a.setAttribute("aria-selected",String(o===e.tab)),a.innerHTML=`${l(s[o],14)}<span>${t.tabs[o]}</span>`})}function J(){return`
    <div class="skeleton" style="height:30px;width:100%"></div>
    <div class="skeleton" style="height:78px;width:100%"></div>
    <div class="skeleton" style="height:110px;width:100%"></div>
    <div class="skeleton" style="height:160px;width:100%"></div>
  `}function X(){const t=h();if(e.sessionLoading&&!e.session)return J();const s=e.session;if(!s||s.empty)return`<div class="panel empty-state">${l("activity",20)}<div class="empty-state-title">${t.noSession}</div></div>`;const a=s.contextWindow||{},o=s.telemetry||{},c=a.usedPercent,F=e.settings.contextWarnPercent||80,y=c==null?"tone-ok":c>=90?"tone-danger":c>=F?"tone-warn":"tone-ok",H=o.cacheHitPercent==null?"":o.cacheHitPercent>=70?"tone-ok":o.cacheHitPercent<35?"tone-warn":"",O=s.recent||[],it=O.find(r=>r.conversationId===s.conversationId)||O[0],Q=it?`${it.title} (${L(it.updatedAtMs)})`:s.title||s.conversationId.slice(0,12),nt=e.pickerOpen?`
    <div class="combo-menu" id="session-picker-menu" role="listbox" aria-label="Session">
      ${O.map(r=>{const W=r.conversationId===s.conversationId;return`
          <button type="button" class="combo-item" role="option" data-pick-conv="${i(r.conversationId)}" aria-selected="${W}">
            <span class="combo-item-check">${W?l("check",12):""}</span>
            <span class="combo-item-title" title="${i(r.title)}">${i(r.title)}</span>
            <span class="combo-item-time">${L(r.updatedAtMs)}</span>
          </button>
        `}).join("")}
    </div>
  `:"",pt=(a.categories||[]).map(r=>{const W=Array.isArray(r.children)&&r.children.length>0,K=W&&e.openCats.has(r.key),dt=K?`
      <div class="cat-children">
        ${r.children.map(yt=>`
          <div class="cat-child-row">
            <span class="cat-child-name" title="${i(yt.label)}">${i(yt.label)}</span>
            <div class="cat-bar"><div class="cat-bar-fill cat-bar-sub" style="width:${Math.min(100,yt.percent||0)}%"></div></div>
            <span class="cat-val">${M(yt.tokens)} \xB7 ${yt.percent}%</span>
          </div>
        `).join("")}
      </div>
    `:"";return W?`
        <div class="cat-group" data-open="${K}">
          <button type="button" class="cat-row cat-row-btn" data-cat-key="${i(r.key)}" aria-expanded="${K}">
            <span class="cat-name" title="${i(r.label)}">${l(K?"chevronDown":"chevronRight",11)}<span>${i(r.label)}</span>${r.childCount>1?`<span class="cat-cnt">(${r.childCount})</span>`:""}</span>
            <div class="cat-bar"><div class="cat-bar-fill" style="width:${Math.min(100,r.percent||0)}%"></div></div>
            <span class="cat-val">${M(r.tokens)} \xB7 ${r.percent}%</span>
          </button>
          ${dt}
        </div>
      `:`
      <div class="cat-row">
        <span class="cat-name" title="${i(r.label)}">${i(r.label)}</span>
        <div class="cat-bar"><div class="cat-bar-fill" style="width:${Math.min(100,r.percent||0)}%"></div></div>
        <span class="cat-val">${M(r.tokens)} \xB7 ${r.percent}%</span>
      </div>
    `}).join(""),ut=r=>({cmd:"terminal",read:"fileText",edit:"edit",search:"search",subagent:"gitBranch"})[r]||"box",$=o.toolBreakdown?.length?`
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${l("terminal",14)}<span>${t.toolBurn}</span></h2>
        <span class="section-meta num">${o.toolCount} calls</span>
      </div>
      <div class="panel tool-burn-list">
        ${o.toolBreakdown.map(r=>`
          <div class="cat-row">
            <span class="cat-name">${l(ut(r.category),12)}<span>${i(t.toolCats[r.category]||r.category)}</span><span class="cat-cnt">\xD7${r.calls}${r.errors?` \xB7 ${r.errors}!`:""}</span></span>
            <div class="cat-bar"><div class="cat-bar-fill" style="width:${Math.min(100,r.sharePercent||0)}%"></div></div>
            <span class="cat-val">~${M(r.estOutputTokens)}${r.durationMs?` \xB7 ${j(r.durationMs)}`:""}</span>
          </div>
        `).join("")}
      </div>
    </section>
  `:"",_=(s.turns||[]).slice().reverse().map(r=>{const W=e.openTurns.has(r.turnNumber),K=(r.toolCalls||[]).map(dt=>`
      <div class="tool-item ${dt.error?"is-err":""}">
        <span class="tool-item-icon">${l(ut(dt.category),13)}</span>
        <span class="tool-item-label" title="${i(dt.detail||dt.label)}">${i(dt.label)}</span>
        <span class="tool-item-dur">${j(dt.durationMs)}</span>
      </div>
    `).join("")||`<div class="section-meta">${t.noTools}</div>`;return`
      <div class="turn-row" data-open="${W}">
        <button type="button" class="turn-trigger" data-turn="${r.turnNumber}" aria-expanded="${W}">
          <span class="turn-num">#${r.turnNumber}</span>
          <span class="turn-main">
            <span class="turn-title">${i(r.promptTitle)}</span>
            <span class="turn-metrics">
              <span>${i(r.model||"\u2014")}</span>
              <span>${M(r.totalTokens)}</span>
              ${r.cacheHitPercent!=null?`<span>${r.cacheHitPercent}%</span>`:""}
              ${r.costUsd!=null?`<span>${b(r.costUsd)}</span>`:""}
              ${r.durationMs!=null?`<span>${j(r.durationMs)}</span>`:""}
              ${r.toolCalls?.length?`<span>${r.toolCalls.length} tools</span>`:""}
            </span>
          </span>
          <span class="turn-chev">${l("chevronRight",14)}</span>
        </button>
        ${W?`<div class="turn-detail">${K}</div>`:""}
      </div>
    `}).join(""),rt=s.subagents?.length?`
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${l("gitBranch",14)}<span>${t.subagents} (${s.subagents.length})</span></h2>
        ${s.subagentSummary?`<span class="section-meta num">${t.combined}: ${M(s.subagentSummary.combinedTotalTokens)} \xB7 ${b(s.subagentSummary.combinedCostUsd)}</span>`:""}
      </div>
      <div class="panel">
        ${s.subagents.map(r=>{const W=r.contextPercent!=null?Math.min(100,r.contextPercent):0,K=W>=85?"tone-danger":W>=70?"tone-warn":"";return`
            <button type="button" class="sub-row" data-inspect-sub="${i(r.conversationId)}" title="${i(r.role)}">
              <div class="sub-top">
                <span class="sub-role">${i(r.role)}</span>
                <span class="sub-right num">
                  ${r.contextPercent!=null?`<span class="badge ${K}">Ctx ${r.contextPercent}%</span>`:""}
                  <span class="sub-cost">${b(r.costUsd)}</span>
                </span>
              </div>
              <div class="sub-meta num">
                <span class="sub-model">${i(r.model||"\u2014")}</span>
                <span>${M(r.totalTokens)} tok</span>
                ${r.cacheHitPercent!=null?`<span>Cache ${r.cacheHitPercent}%</span>`:""}
                ${r.tps!=null?`<span>${r.tps} t/s</span>`:""}
                ${r.requests?`<span>${r.requests} req</span>`:""}
              </div>
            </button>
          `}).join("")}
      </div>
    </section>
  `:"",Mt=o.roles?`
    <div class="role-strip num">
      ${o.roles.planner?`<span>Planner: ${o.roles.planner.requests} req \xB7 ${M(o.roles.planner.tokens)}${o.roles.planner.tps?` \xB7 ${o.roles.planner.tps} t/s`:""}</span>`:""}
      ${o.roles.execution?`<span>Exec: ${o.roles.execution.requests} req \xB7 ${M(o.roles.execution.tokens)}${o.roles.execution.tps?` \xB7 ${o.roles.execution.tps} t/s`:""}</span>`:""}
    </div>
  `:"",xt=Y(a.latestRequestAtMs,a.cacheTtlMs||3e5),w=xt?`<span id="ttl-pill" class="ttl-pill ${xt.warm?"is-warm":"is-cold"}" data-req-ms="${a.latestRequestAtMs}" data-ttl-ms="${a.cacheTtlMs||3e5}">${l("clock",11)}<span>${i(xt.label)}</span></span>`:"",et=(a.latestCacheReadTokens||0)+(a.latestInputTokens||0)+(a.latestOutputTokens||0),tt=Math.min(100,c??0);let Tt=`<div class="ctx-fill ${y}" style="width:${tt}%"></div>`;if(y==="tone-ok"&&et>0&&tt>0){const r=tt*((a.latestCacheReadTokens||0)/et),W=tt*((a.latestInputTokens||0)/et),K=Math.max(0,tt-r-W);Tt=`
      ${r>0?`<div class="ctx-fill seg-cache" style="width:${r.toFixed(2)}%"></div>`:""}
      ${W>0?`<div class="ctx-fill seg-input" style="width:${W.toFixed(2)}%"></div>`:""}
      ${K>0?`<div class="ctx-fill seg-output" style="width:${K.toFixed(2)}%"></div>`:""}
    `}const lt=(s.series?.length||0)>=2,ht=(s.turns?.length||0)>=2,$t=(s.series||[]).filter(r=>Number.isFinite(r.tps)&&r.tps>0).length>=2;let Z=e.sessionChart;Z==="context"&&!lt&&(Z=ht?"turns":$t?"speed":"context"),Z==="speed"&&!$t&&(Z=lt?"context":"turns"),Z==="turns"&&!ht&&(Z=lt?"context":"speed");let ot="";Z==="context"&&lt?ot=ft(s.series,a.maxTokens||1e6,F):Z==="turns"&&ht?ot=Ft(s.turns):Z==="speed"&&$t&&(ot=Lt(s.series));const bt=ot?`
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${l("trendingUp",14)}<span>${t.sessionTrend}</span></h2>
        <div class="seg" role="group">
          ${lt?`<button type="button" class="seg-btn" data-schart="context" aria-pressed="${Z==="context"}">${t.chartCtx}</button>`:""}
          ${ht?`<button type="button" class="seg-btn" data-schart="turns" aria-pressed="${Z==="turns"}">${t.chartTurns}</button>`:""}
          ${$t?`<button type="button" class="seg-btn" data-schart="speed" aria-pressed="${Z==="speed"}">${t.chartSpeed}</button>`:""}
        </div>
      </div>
      <div class="panel chart-box">${ot}</div>
    </section>
  `:"";return`
    <div class="session-bar">
      ${e.parentConvId&&e.parentConvId!==s.conversationId?`<button type="button" id="btn-back-parent" class="back-pill" title="${t.backParent}">${l("arrowLeft",12)}<span>${t.backParent}</span></button>`:""}
      <div class="combo" id="session-combo">
        <button type="button" id="session-picker-btn" class="combo-trigger" aria-haspopup="listbox" aria-expanded="${e.pickerOpen}" title="${i(Q)}">
          <span class="combo-trigger-text">${i(Q)}</span>
          <span class="combo-trigger-chev">${l("chevronDown",13)}</span>
        </button>
        ${nt}
      </div>
      <span class="badge" title="${i(s.model)}">${i(s.model)}</span>
    </div>

    <section class="panel" aria-label="${t.context}">
      <div class="ctx-head">
        <span class="ctx-title">${l("layers",14)}<span>${t.context}</span>${w}</span>
        <span class="ctx-numbers">
          <span class="ctx-ratio">${M(a.usedTokens)} / ${a.maxTokens?M(a.maxTokens):"\u2014"}</span>
          <span class="ctx-pct ${y}">${c!=null?`${c}%`:"\u2014"}</span>
        </span>
      </div>
      <div class="ctx-track-wrap">
        <div class="ctx-track" role="progressbar" aria-valuenow="${c??0}" aria-valuemin="0" aria-valuemax="100">
          ${Tt}
        </div>
      </div>
      <div class="ctx-legend">
        <span><i class="dot dot-cache"></i> ${M(a.latestCacheReadTokens)} \xB7 <i class="dot dot-input"></i> ${M(a.latestInputTokens)} \xB7 <i class="dot dot-output"></i> ${M(a.latestOutputTokens)}${a.checkpointCount?` \xB7 ${t.checkpoints} ${a.checkpointCount}`:""}</span>
        ${a.categories?.length?`<button type="button" class="ctx-toggle" id="btn-ctx-toggle" aria-expanded="${e.ctxExpanded}">${t.breakdown} ${l(e.ctxExpanded?"chevronDown":"chevronRight",12)}</button>`:""}
      </div>
      ${a.staticOverheadTokens>0||a.burnPerTurnTokens>0?`
        <div class="ctx-tax-row num">
          ${a.staticOverheadTokens>0?`<span>${t.overhead} ${M(a.staticOverheadTokens)} (${a.staticOverheadPercent}%) \xB7 ${t.chatLbl} ${M(a.chatTokens)}</span>`:"<span></span>"}
          ${a.burnPerTurnTokens>0?`<span>+${M(a.burnPerTurnTokens)}${t.perTurn}${a.estTurnsToWarn!=null?` \xB7 ~${a.estTurnsToWarn} ${t.turnsLeft} \u2192 ${a.warnPercent||F}%`:""}</span>`:""}
        </div>
      `:""}
      ${e.ctxExpanded&&pt?`<div class="ctx-cats">${pt}</div>`:""}
    </section>

    <section class="kpi-rail" aria-label="Telemetry">
      <div class="kpi-cell">
        <span class="kpi-label">${l("database",13)}<span>${t.cacheHit}</span></span>
        <span class="kpi-value ${H}">${o.cacheHitPercent!=null?`${o.cacheHitPercent}%`:"\u2014"}</span>
        <span class="kpi-sub">${M(o.cacheReadTokens)} read</span>
      </div>
      <div class="kpi-cell">
        <span class="kpi-label">${l("zap",13)}<span>${t.speed}</span></span>
        <span class="kpi-value">${o.tps!=null?`${o.tps} t/s`:"\u2014"}</span>
        <span class="kpi-sub">TTFT ${j(o.avgTtftMs)}${o.peakTps?` \xB7 Max ${o.peakTps}`:""}</span>
      </div>
      <div class="kpi-cell">
        <span class="kpi-label">${l("cpu",13)}<span>${t.tokens}</span></span>
        <span class="kpi-value">${M(o.totalTokens)}</span>
        <span class="kpi-sub">In ${M(o.inputTokens)} \xB7 Out ${M(o.outputTokens)}</span>
      </div>
      <div class="kpi-cell">
        <span class="kpi-label">${l("dollar",13)}<span>${t.cost}</span></span>
        <span class="kpi-value">${b(o.costUsd)}</span>
        <span class="kpi-sub">${o.requestCount} req \xB7 ${o.toolCount} tools${o.errorCount?` \xB7 ${o.errorCount} ${t.errors}`:""}</span>
      </div>
    </section>

    ${Mt}

    ${bt}

    ${$}

    ${rt}

    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${l("activity",14)}<span>${t.turns}</span></h2>
        <span class="section-meta">${o.turnCount} \xB7 Model ${j(o.modelTimeMs)} \xB7 Tool ${j(o.toolTimeMs)}</span>
      </div>
      <div class="panel">${_||`<div class="empty-state">${t.noSession}</div>`}</div>
    </section>
  `}function n(t,s){const a=e.logQuery.trim().toLowerCase(),o=(t?.recentRequests||[]).filter(c=>!(e.logFilter==="err"&&!c.error&&!c.retryErrors?.length||e.logFilter==="drop"&&!c.cacheDrop||e.usageConv&&c.conversationId!==e.usageConv||a&&!`${c.model} ${c.conversationTitle||""} ${c.error||""} ${(c.retryErrors||[]).join(" ")}`.toLowerCase().includes(a))).slice(0,40);return C=o,o.map((c,F)=>{const y=c.error||c.retryErrors?.[0]||"";return`
      <div class="req-row ${c.error?"is-err":c.cacheDrop?"is-drop":""}">
        <div class="req-top">
          <div class="req-left">
            <span class="req-clock mono">${P(c.timestampMs)}</span>
            <span class="req-model" title="${i(c.model)}">${i(c.model)}</span>
            ${c.source==="cli"?'<span class="badge">CLI</span>':""}
            ${c.error?`<span class="badge tone-danger">${s.filterErr}</span>`:""}
            ${c.cacheDrop?`<span class="badge tone-warn">Drop${c.cacheWasteUsd>0?` +${b(c.cacheWasteUsd)}`:""}</span>`:""}
          </div>
          <span class="req-right num">
            ${c.cacheHitPercent!=null?`<span class="section-meta">${c.cacheHitPercent}%</span>`:""}
            <span>${b(c.costUsd)}</span>
          </span>
        </div>
        <div class="req-meta num">
          <span>
            ${c.tps!=null?`${c.tps} t/s`:"\u2014"}${c.ttftMs!=null?` \xB7 ${j(c.ttftMs)}`:""} \xB7 In ${M(c.inputTokens)} \xB7 Cache ${M(c.cacheReadTokens)} \xB7 Out ${M(c.outputTokens)}
          </span>
          ${c.conversationId?`<button type="button" class="req-conv" data-open-conv="${i(c.conversationId)}" title="${i(c.conversationTitle||c.conversationId)}">${i(c.conversationTitle||c.conversationId.slice(0,8))}</button>`:""}
        </div>
        ${y?`
          <div class="req-err-box">
            <span class="req-err-txt" title="${i(y)}">${i(y)}</span>
            <button type="button" class="icon-btn" data-copy-req-err="${F}" title="Copy">${l("copy",12)}</button>
          </div>
        `:""}
      </div>
    `}).join("")||`<div class="empty-state">${s.noResults}</div>`}function u(){const t=h();if(e.usageLoading&&!e.usage)return J();const s=e.usage,a=s?.totals||{},o=["5h","today","24h","7d","30d","all"].map($=>`<button type="button" class="seg-btn" data-range="${$}" aria-pressed="${e.usageRange===$}">${t.ranges[$]}</button>`).join(""),c=`<option value="">${t.allModels}</option>`+(s?.availableModels||[]).map($=>`<option value="${i($)}" ${$===e.usageModel?"selected":""}>${i($)}</option>`).join(""),F=`<option value="">${t.allConvs}</option>`+(s?.availableConversations||[]).map($=>`<option value="${i($.conversationId)}" ${$.conversationId===e.usageConv?"selected":""}>${i($.title||$.conversationId.slice(0,8))}</option>`).join(""),y=[["tokens",t.tokens],["cost","$"],["requests","Req"],["cache","Cache %"]].map(([$,_])=>`<button type="button" class="seg-btn" data-metric="${$}" aria-pressed="${e.usageMetric===$}">${_}</button>`).join(""),H=St(s?.models||[],a),O=s?.heatmap?ct(s.heatmap):"",it=n(s,t),Q=s?.budget||{},nt=[];if(Q.dailyBudgetUsd>0){const $=Math.round(Q.todayCostUsd/Q.dailyBudgetUsd*100),_=Math.min(100,Math.max(0,$)),rt=$>=100?"tone-danger":$>=80?"tone-warn":"tone-ok";nt.push(`
      <div class="budget-item">
        <div class="budget-head num"><span>${t.budgetDaily}</span><span>${b(Q.todayCostUsd)} / ${b(Q.dailyBudgetUsd)} (${$}%)</span></div>
        <div class="ctx-track"><div class="ctx-fill ${rt}" style="width:${_}%"></div></div>
      </div>
    `)}if(Q.weeklyBudgetUsd>0){const $=Math.round(Q.weekCostUsd/Q.weeklyBudgetUsd*100),_=Math.min(100,Math.max(0,$)),rt=$>=100?"tone-danger":$>=80?"tone-warn":"tone-ok";nt.push(`
      <div class="budget-item">
        <div class="budget-head num"><span>${t.budgetWeekly}</span><span>${b(Q.weekCostUsd)} / ${b(Q.weeklyBudgetUsd)} (${$}%)</span></div>
        <div class="ctx-track"><div class="ctx-fill ${rt}" style="width:${_}%"></div></div>
      </div>
    `)}const pt=nt.length?`
    <section class="panel budget-panel" aria-label="${t.budgetTitle}">${nt.join("")}</section>
  `:"",ut=s?.topSessions?.length?`
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${l("dollar",14)}<span>${t.topSessions}</span></h2>
        <span class="section-meta">${s.topSessions.length}</span>
      </div>
      <div class="panel">
        ${s.topSessions.map($=>`
          <button type="button" class="sub-row" data-open-conv="${i($.conversationId)}" title="${i($.title)}">
            <div class="sub-top">
              <span class="sub-role">${i($.title)}</span>
              <span class="sub-right num">
                <span class="badge">${$.sharePercent}%</span>
                <span class="sub-cost">${b($.costUsd)}</span>
              </span>
            </div>
            <div class="sub-meta num">
              <span class="sub-model">${i($.model||"\u2014")}</span>
              <span>${M($.tokens)} tok</span>
              ${$.cacheHitPercent!=null?`<span>Cache ${$.cacheHitPercent}%</span>`:""}
              <span>${$.requests} req</span>
              ${$.cacheDrops?`<span class="badge tone-warn">${$.cacheDrops} drop</span>`:""}
            </div>
          </button>
        `).join("")}
      </div>
    </section>
  `:"";return`
    <div class="toolbar">
      <div class="seg" role="group">${o}</div>
      <select id="usage-model" class="select select-sm" aria-label="Model">${c}</select>
    </div>

    <section class="kpi-rail">
      <div class="kpi-cell">
        <span class="kpi-label">${l("activity",13)}<span>${t.requests}</span></span>
        <span class="kpi-value">${a.requests??0}</span>
        <span class="kpi-sub">${a.errors?`${a.errors} ${t.errors}`:"0 err"}${a.retries?` \xB7 ${a.retries} retry`:""}${a.cliRequests?` \xB7 CLI ${a.cliRequests}`:""}</span>
      </div>
      <div class="kpi-cell">
        <span class="kpi-label">${l("cpu",13)}<span>${t.tokens}</span></span>
        <span class="kpi-value">${M(a.totalTokens)}</span>
        <span class="kpi-sub">In ${M(a.inputTokens)} \xB7 Out ${M(a.outputTokens)}</span>
      </div>
      <div class="kpi-cell">
        <span class="kpi-label">${l("database",13)}<span>${t.cacheHit}</span></span>
        <span class="kpi-value ${(a.cacheHitPercent??0)>=70?"tone-ok":""}">${a.cacheHitPercent!=null?`${a.cacheHitPercent}%`:"\u2014"}</span>
        <span class="kpi-sub">${M(a.cacheReadTokens)}${a.cacheDrops?` \xB7 ${a.cacheDrops} drop`:""}${a.cacheWasteUsd>0?` (+${b(a.cacheWasteUsd)})`:""}</span>
      </div>
      <div class="kpi-cell">
        <span class="kpi-label">${l("dollar",13)}<span>${t.cost}</span></span>
        <span class="kpi-value">${b(a.costUsd)}</span>
        <span class="kpi-sub">${e.settings.pricingMode==="promo"?t.modePromo:t.modeStandard}</span>
      </div>
    </section>

    ${pt}

    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${l("barChart",14)}<span>${t.daily}</span></h2>
        <div class="seg" role="group">${y}</div>
      </div>
      <div class="panel chart-box">
        ${s?.days?.length?Ct(s.days,e.usageMetric):`<div class="empty-state">${t.noResults}</div>`}
      </div>
    </section>

    ${H?`
      <section class="section">
        <div class="section-head">
          <h2 class="section-title">${l("pieChart",14)}<span>${t.tokenMix}</span></h2>
          <span class="section-meta">${M(a.totalTokens)}</span>
        </div>
        <div class="panel">${H}</div>
      </section>
    `:""}

    ${O?`
      <section class="section">
        <div class="section-head">
          <h2 class="section-title">${l("calendar",14)}<span>${t.heatmap}</span></h2>
          <span class="section-meta num">${s.heatmap.length}d</span>
        </div>
        <div class="panel chart-box">${O}</div>
      </section>
    `:""}

    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${l("layers",14)}<span>${t.byModel}</span></h2>
        <span class="section-meta">${s?.models?.length||0}</span>
      </div>
      <div class="panel">
        ${Rt(s?.models||[])}
        <div class="table-wrap">
          <table class="tbl">
            <thead>
              <tr>
                <th>${t.colModel}</th>
                <th class="r">${t.colReq}</th>
                <th class="r">${t.colTokens}</th>
                <th class="r">${t.colCache}</th>
                <th class="r">${t.colCost}</th>
              </tr>
            </thead>
            <tbody>
              ${(s?.models||[]).map(($,_)=>`
                <tr>
                  <td class="trunc" title="${i($.model)}">
                    <span class="model-cell">
                      <i class="swatch" style="background:${_<5?gt(_):"var(--line-strong)"}"></i>
                      <span class="model-cell-stack">
                        <span class="model-cell-name">${i($.model)}</span>
                        ${$.avgTps!=null?`<span class="model-speed mono">${$.avgTps}${$.peakTps?` / ${$.peakTps}`:""} t/s</span>`:""}
                      </span>
                    </span>
                  </td>
                  <td class="r">${$.requests}</td>
                  <td class="r">${M($.tokens)}</td>
                  <td class="r">${$.cacheHitPercent!=null?`${$.cacheHitPercent}%`:"\u2014"}</td>
                  <td class="r">${b($.costUsd)}</td>
                </tr>
              `).join("")||`<tr><td colspan="5" class="empty-state">${t.noResults}</td></tr>`}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    ${ut}

    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${l("terminal",14)}<span>${t.recentLog}</span></h2>
        <div class="seg" role="group">
          <button type="button" class="seg-btn" data-log-filter="all" aria-pressed="${e.logFilter==="all"}">${t.filterAll}</button>
          <button type="button" class="seg-btn" data-log-filter="err" aria-pressed="${e.logFilter==="err"}">${t.filterErr}${a.errors?` (${a.errors})`:""}</button>
          <button type="button" class="seg-btn" data-log-filter="drop" aria-pressed="${e.logFilter==="drop"}">${t.filterDrop}${a.cacheDrops?` (${a.cacheDrops})`:""}</button>
        </div>
      </div>
      <div class="panel">
        <div class="log-controls">
          <input id="log-search" class="input" type="search" placeholder="${i(t.logSearchPlaceholder)}" autocomplete="off">
          <select id="log-conv" class="select select-sm" aria-label="Session">${F}</select>
        </div>
        <div id="req-log-list">${it}</div>
      </div>
    </section>
  `}function R(t){const s=t.snippet||"",a=Math.max(0,t.matchStart||0),o=Math.max(0,t.matchLength||0);return!o||a>=s.length?i(s):`${i(s.slice(0,a))}<mark>${i(s.slice(a,a+o))}</mark>${i(s.slice(a+o))}`}function V(){const t=h(),s=["all","text","code","cmd"].map(o=>`<button type="button" class="seg-btn" data-scope="${o}" aria-pressed="${e.searchScope===o}">${t.scopes[o]}</button>`).join("");let a="";if(e.searchLoading)a='<div class="panel" style="padding:12px;display:flex;flex-direction:column;gap:8px"><div class="skeleton" style="height:48px"></div><div class="skeleton" style="height:48px"></div></div>';else if(!e.searchQuery.trim()||e.searchQuery.trim().length<2&&!/[^\x00-\x7f]/.test(e.searchQuery))a=`<div class="panel empty-state">${l("search",18)}<div class="empty-state-title">${t.searchPrompt}</div></div>`;else if(!e.searchData?.results?.length)a=`<div class="panel empty-state">${l("search",18)}<div class="empty-state-title">${t.noResults}</div></div>`;else{const o=e.searchData.results.map((c,F)=>`
      <div class="search-item">
        <div class="search-item-head">
          <span class="search-item-title" title="${i(c.title)}">${i(c.title)}</span>
          <span class="search-item-actions">
            <span class="badge">${t.kinds[c.kind]||c.kind} #${c.turnNumber}</span>
            <span class="section-meta">${L(c.timestampMs)}</span>
            ${c.copyText?`<button type="button" class="icon-btn" data-copy-idx="${F}" title="Copy">${l("copy",13)}</button>`:""}
            <button type="button" class="icon-btn" data-open-conv="${i(c.conversationId)}" title="${t.open}">${l("arrowUpRight",13)}</button>
          </span>
        </div>
        <div class="search-snippet ${c.kind==="code"||c.kind==="cmd"?"is-code":""}">${R(c)}</div>
      </div>
    `).join("");a=`
      <div class="section-head">
        <span class="section-meta">${e.searchData.results.length} / ${e.searchData.scanned} sessions${e.searchData.truncated?"+":""}</span>
      </div>
      <div class="panel">${o}</div>
    `}return`
    <div class="search-bar">
      <div class="search-input-wrap">
        <span class="search-ic">${l("search",14)}</span>
        <input id="search-input" class="input search-input" type="search" placeholder="${i(t.searchPlaceholder)}" autocomplete="off">
      </div>
    </div>
    <div class="seg" role="group">${s}</div>
    ${a}
  `}function N(){const t=h(),s=e.session,a=s?.turns?.length||0,o=`<option value="">${t.exportAll}${a?` (${a})`:""}</option>`+Array.from({length:a},(y,H)=>H+1).map(y=>`<option value="${y}" ${String(e.exportTurn)===String(y)?"selected":""}>${t.exportUntil} #${y}</option>`).join(""),c=new Date().toISOString().slice(0,10),F=e.catalog.map(y=>{const O=!y.custom&&e.settings.pricingMode==="promo"&&(!y.promoUntil||c<y.promoUntil)||!y.standard?y:y.standard;return`
      <tr data-rate-model="${i(y.model)}" data-custom="${y.custom?"1":"0"}" data-orig-input="${O.input}" data-orig-cache="${O.cache}" data-orig-output="${O.output}">
        <td class="trunc" title="${i(y.model)}">${i(y.label||y.model)}</td>
        <td class="r"><input type="number" step="0.01" min="0" max="1000" class="rate-input" data-field="input" value="${O.input}"></td>
        <td class="r"><input type="number" step="0.005" min="0" max="1000" class="rate-input" data-field="cache" value="${O.cache}"></td>
        <td class="r"><input type="number" step="0.1" min="0" max="1000" class="rate-input" data-field="output" value="${O.output}"></td>
      </tr>
    `}).join("");return`
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${l("download",14)}<span>${t.exportTitle}</span></h2>
        ${s?.conversationId?`<span class="section-meta mono">${i(s.conversationId.slice(0,8))}</span>`:""}
      </div>
      <div class="panel">
        <div class="export-bar">
          <select id="export-turn" class="select select-sm export-turn-sel" ${a?"":"disabled"}>${o}</select>
          <div class="toolbar-group">
            <button type="button" class="btn btn-sm" id="btn-export-fork" ${s?.conversationId?"":"disabled"}>${l("gitBranch",13)}<span>${t.exportFork}</span></button>
            <button type="button" class="btn btn-sm" id="btn-export-md" ${s?.conversationId?"":"disabled"}>${l("fileText",13)}<span>${t.exportMd}</span></button>
            <button type="button" class="btn btn-sm" id="btn-export-jsonl" ${s?.conversationId?"":"disabled"}>${l("terminal",13)}<span>${t.exportJsonl}</span></button>
          </div>
        </div>
        ${e.exportNotice?`
          <div class="export-notice">
            <div class="export-notice-row">
              <span class="export-notice-txt" title="${i(e.exportNotice.detail||e.exportNotice.text)}">${l("check",12)}<span>${i(e.exportNotice.text)}</span></span>
              ${m?`<button type="button" class="btn btn-sm" id="btn-copy-export-body" style="flex-shrink:0">${l("copy",12)}<span>Copy</span></button>`:""}
            </div>
            ${e.exportNotice.showPreview&&m?`<textarea id="export-preview-ta" class="export-preview mono" readonly rows="4">${i(m)}</textarea>`:""}
          </div>
        `:""}
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${l("sliders",14)}<span>${t.prefsTitle}</span></h2>
        ${e.statusBadge?`<span class="badge tone-ok">${i(e.statusBadge)}</span>`:""}
      </div>
      <div class="panel row-list">
        <div class="setting-row">
          <span class="setting-label">${t.language}</span>
          <div class="seg" role="group">
            <button type="button" class="seg-btn" data-set-lang="vi" aria-pressed="${e.settings.language==="vi"}">VI</button>
            <button type="button" class="seg-btn" data-set-lang="en" aria-pressed="${e.settings.language==="en"}">EN</button>
          </div>
        </div>
        <div class="setting-row">
          <span class="setting-label">${t.pricingMode}</span>
          <div class="seg" role="group">
            <button type="button" class="seg-btn" data-set-pmode="standard" aria-pressed="${e.settings.pricingMode==="standard"}">${t.modeStandard}</button>
            <button type="button" class="seg-btn" data-set-pmode="promo" aria-pressed="${e.settings.pricingMode==="promo"}">${t.modePromo}</button>
          </div>
        </div>
        <div class="setting-row">
          <span class="setting-label">${t.warnAt}</span>
          <div class="seg" role="group">
            ${[75,80,85,90].map(y=>`<button type="button" class="seg-btn" data-set-warn="${y}" aria-pressed="${e.settings.contextWarnPercent===y}">${y}%</button>`).join("")}
          </div>
        </div>
        <div class="setting-row">
          <span class="setting-label">${t.ctxLimit}</span>
          <select id="set-ctx-limit" class="select select-sm">
            ${[[1e6,"1M"],[512e3,"512K"],[256e3,"256K"],[2e6,"2M"],[0,t.auto]].map(([y,H])=>`<option value="${y}" ${e.settings.contextLimitOverride===y?"selected":""}>${H}</option>`).join("")}
          </select>
        </div>
        <div class="setting-row">
          <span class="setting-label">${t.dailyBudget}</span>
          <input type="number" id="set-budget-daily" class="rate-input" min="0" step="1" value="${e.settings.dailyBudgetUsd||0}" aria-label="${t.dailyBudget}">
        </div>
        <div class="setting-row">
          <span class="setting-label">${t.weeklyBudget}</span>
          <input type="number" id="set-budget-weekly" class="rate-input" min="0" step="5" value="${e.settings.weeklyBudgetUsd||0}" aria-label="${t.weeklyBudget}">
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-head rate-head">
        <h2 class="section-title">${l("dollar",14)}<span>${t.ratesTitle}</span>${e.pricingMeta?.syncedAt?`<span class="section-meta">${i(e.pricingMeta.syncedAt.slice(0,10))}</span>`:""}</h2>
        <div class="toolbar-group rate-actions">
          <button type="button" class="btn btn-sm" id="btn-sync-pricing" title="${i(t.syncRates)}" aria-label="${i(t.syncRates)}" ${e.syncingRates?"disabled":""}>${l("refresh",12)}<span class="btn-lbl">${t.syncRates}</span></button>
          <button type="button" class="btn btn-sm" id="btn-reset-settings" title="${i(t.resetAll)}" aria-label="${i(t.resetAll)}">${l("rotateCcw",12)}<span class="btn-lbl">${t.resetAll}</span></button>
          <button type="button" class="btn btn-sm btn-primary" id="btn-save-rates" title="${i(t.saveRates)}" aria-label="${i(t.saveRates)}">${l("check",12)}<span class="btn-lbl">${t.saveRates}</span></button>
        </div>
      </div>
      <div class="panel table-wrap">
        <table class="tbl rate-tbl">
          <thead>
            <tr>
              <th>${t.colModel}</th>
              <th class="r">Input</th>
              <th class="r">Cache</th>
              <th class="r">Output</th>
            </tr>
          </thead>
          <tbody>${F}</tbody>
        </table>
      </div>
    </section>
  `}function x(){A();const t=h(),s=e.error?`
    <div class="error-banner" role="alert">
      <span>${l("alert",14)} ${i(e.error)}</span>
      <button type="button" class="btn btn-sm" id="btn-retry">${t.retry}</button>
    </div>
  `:"";let a="";e.tab==="session"?a=X():e.tab==="usage"?a=u():e.tab==="search"?a=V():a=N();const o=document.activeElement?.id,c=document.activeElement?.selectionStart,F=document.activeElement?.selectionEnd;v.innerHTML=s+a;const y=document.getElementById("search-input");y&&y.value!==e.searchQuery&&(y.value=e.searchQuery);const H=document.getElementById("log-search");if(H&&H.value!==e.logQuery&&(H.value=e.logQuery),["search-input","log-search"].includes(o)){const O=document.getElementById(o);O&&(O.focus(),typeof c=="number"&&O.setSelectionRange(c,F))}}function G(){if(e.pickerOpen)return!0;const t=document.activeElement?.tagName;return t==="SELECT"||t==="INPUT"||t==="TEXTAREA"}function S(){e.pendingRender&&!G()&&(e.pendingRender=!1,x())}async function q({silent:t=!1}={}){const s=++d;t||(e.sessionLoading=!0,x());let a=!t;try{const o=await g("/api/session",{conversationId:e.selectedConvId,knownRev:t?e.sessionRev:0});if(s!==d)return;e.error&&(a=!0),e.error="",o.unchanged||(e.session=o,e.sessionRev=o.rev||0,o.conversationId&&!e.selectedConvId&&(e.selectedConvId=o.conversationId),a=!0)}catch(o){if(s!==d)return;e.error=o.message,a=!0}finally{if(s!==d||(e.sessionLoading=!1,!a))return;if(t&&G()){e.pendingRender=!0;return}e.pendingRender=!1;const o=window.scrollY;x(),t&&o>0&&window.scrollTo(0,o)}}let U=null;async function D({force:t=!1,logOnly:s=!1}={}){const a=++p;s||(e.usageLoading=!0,x());let o=!1;try{const c=await g("/api/usage",{range:e.usageRange,model:e.usageModel,conv:e.usageConv,query:e.logQuery.trim(),force:t});if(a!==p)return;e.usageConv&&!(c.availableConversations||[]).some(F=>F.conversationId===e.usageConv)?(e.usageConv="",o=!0):(e.usage=c,e.error="")}catch(c){if(a!==p)return;e.error=c.message}finally{if(a!==p)return;if(e.usageLoading=!1,!o){if(s&&!e.error&&e.usage){const c=document.getElementById("req-log-list");if(c){c.innerHTML=n(e.usage,h());return}}x()}}o&&await D({force:t,logOnly:!1})}let at=null;async function z(){const t=++T,s=e.searchQuery.trim();if(!s||s.length<2&&!/[^\x00-\x7f]/.test(s)){e.searchData=null,e.searchLoading=!1,x();return}e.searchLoading=!0,x();try{const a=await g("/api/search",{query:s,scope:e.searchScope});if(t!==T)return;e.searchData=a,e.error=""}catch(a){if(t!==T)return;e.error=a.message}finally{if(t!==T)return;e.searchLoading=!1,x()}}async function st(t){try{const s=await g("/api/settings/set",t);e.settings=s.settings,e.catalog=s.catalog,e.sessionRev=0,kt(h().saved),e.tab==="session"?await q():e.tab==="usage"?await D({force:!0}):x()}catch(s){e.error=s.message,x()}}let vt=null;function kt(t){e.statusBadge=t,clearTimeout(vt),vt=setTimeout(()=>{e.statusBadge="",e.tab==="config"&&!G()&&x()},1800)}async function mt(t){if(e.session?.conversationId)try{const s=await g("/api/export",{conversationId:e.session.conversationId,format:t,untilTurn:e.exportTurn||null});m=s.content??s.body??"";const a=s.mimeType||s.contentType||"text/plain; charset=utf-8",o=e.settings.language==="en";if(t==="fork"){const F=await E(m);e.exportNotice={text:F?o?`Copied Fork prompt (${M(m.length)} chars)`:`\u0110\xE3 ch\xE9p Fork prompt (${M(m.length)} k\xFD t\u1EF1)`:o?"Select text below and press Ctrl+C":"Ch\u1ECDn n\u1ED9i dung b\xEAn d\u01B0\u1EDBi v\xE0 nh\u1EA5n Ctrl+C",detail:s.filename,showPreview:!F},x(),F||document.getElementById("export-preview-ta")?.select();return}if(window.sidecar?.previewMode){const F=new Blob([m],{type:a}),y=URL.createObjectURL(F),H=document.createElement("a");H.href=y,H.download=s.filename,document.body.appendChild(H),H.click(),H.remove(),setTimeout(()=>URL.revokeObjectURL(y),1e3)}const c=s.savedPath?s.savedPath.replace(/^.*[/\\](Downloads[/\\]|exports[/\\])/i,"$1"):s.filename;e.exportNotice={text:s.savedPath?o?`Saved: ${c}`:`\u0110\xE3 l\u01B0u: ${c}`:o?`Ready: ${s.filename}`:`S\u1EB5n s\xE0ng: ${s.filename}`,detail:s.savedPath||s.filename,showPreview:!s.savedPath},x()}catch(s){e.error=s.message,x()}}document.querySelector(".tabs").addEventListener("click",t=>{const s=t.target.closest(".tab");if(!s)return;const a=s.dataset.tab;a!==e.tab&&(e.tab=a,e.pickerOpen=!1,e.error="",x(),a==="session"?q():a==="usage"?D():a==="search"&&document.getElementById("search-input")?.focus())}),I.addEventListener("click",async()=>{I.classList.add("spinning");try{e.tab==="session"?await q():e.tab==="usage"?await D({force:!0}):e.tab==="search"?await z():await q()}finally{I.classList.remove("spinning")}}),B.addEventListener("click",()=>{const t=document.documentElement.dataset.theme;document.documentElement.dataset.theme=t==="dark"?"light":"dark",A()}),v.addEventListener("click",async t=>{if(t.target.closest("#btn-retry")){e.error="",I.click();return}if(t.target.closest("#session-picker-btn")){t.stopPropagation(),e.pickerOpen=!e.pickerOpen,x(),e.pickerOpen?document.querySelector('#session-picker-menu .combo-item[aria-selected="true"]')?.scrollIntoView({block:"nearest"}):S();return}const o=t.target.closest("[data-pick-conv]");if(o){t.stopPropagation();const w=o.dataset.pickConv;e.pickerOpen=!1,e.pendingRender=!1,w&&w!==e.selectedConvId?(f(w),await q()):(e.parentConvId="",x());return}const c=t.target.closest("[data-inspect-sub]");if(c){const w=c.dataset.inspectSub;if(w){const et=e.parentConvId||e.selectedConvId||e.session?.conversationId||"";f(w,{parentId:et}),await q()}return}if(t.target.closest("#btn-back-parent")&&e.parentConvId){f(e.parentConvId),await q();return}const F=t.target.closest("[data-schart]");if(F){e.sessionChart=F.dataset.schart,x();return}if(t.target.closest("#btn-ctx-toggle")){e.ctxExpanded=!e.ctxExpanded;try{localStorage.setItem("agy_lens_ctx_expanded",e.ctxExpanded?"1":"0")}catch{}x();return}const H=t.target.closest("[data-cat-key]");if(H){const w=H.dataset.catKey;e.openCats.has(w)?e.openCats.delete(w):e.openCats.add(w),x();return}const O=t.target.closest(".turn-trigger");if(O){const w=Number(O.dataset.turn);e.openTurns.has(w)?e.openTurns.delete(w):e.openTurns.add(w),x();return}const it=t.target.closest("[data-range]");if(it){e.usageRange=it.dataset.range,await D();return}const Q=t.target.closest("[data-metric]");if(Q){e.usageMetric=Q.dataset.metric,x();return}const nt=t.target.closest("[data-log-filter]");if(nt){e.logFilter=nt.dataset.logFilter,x();return}const pt=t.target.closest("[data-scope]");if(pt){e.searchScope=pt.dataset.scope,await z();return}const ut=t.target.closest("[data-open-conv]");if(ut){const w=ut.dataset.openConv;window.sidecar?.ui?.toggleConversation&&window.sidecar.ui.toggleConversation(w),f(w),e.tab="session",await q();return}const $=t.target.closest("[data-copy-idx]");if($){const w=e.searchData?.results?.[Number($.dataset.copyIdx)];w?.copyText&&(await E(w.copyText),$.innerHTML=l("check",13),setTimeout(()=>{$.innerHTML=l("copy",13)},1e3));return}const _=t.target.closest("[data-copy-req-err]");if(_){const w=C[Number(_.dataset.copyReqErr)],et=w?.error||w?.retryErrors?.[0]||"";et&&(await E(et),_.innerHTML=l("check",12),setTimeout(()=>{_.innerHTML=l("copy",12)},1e3));return}if(t.target.closest("#btn-copy-export-body")&&m){const w=t.target.closest("#btn-copy-export-body");if(!await E(m)&&e.exportNotice){e.exportNotice={...e.exportNotice,showPreview:!0},x(),document.getElementById("export-preview-ta")?.select();return}w.innerHTML=`${l("check",12)}<span>${h().copied}</span>`,setTimeout(()=>{w.innerHTML=`${l("copy",12)}<span>Copy</span>`},1200);return}if(t.target.closest("#btn-export-fork")){await mt("fork");return}if(t.target.closest("#btn-export-md")){await mt("md");return}if(t.target.closest("#btn-export-jsonl")){await mt("jsonl");return}if(t.target.closest("#btn-sync-pricing")){e.syncingRates=!0,x();try{const w=await g("/api/pricing/sync",{});e.catalog=w.catalog||e.catalog,e.pricingMeta=w.pricingMeta||e.pricingMeta,e.error="",kt(h().saved)}catch(w){e.error=w.message}finally{e.syncingRates=!1,x()}return}const rt=t.target.closest("[data-set-lang]");if(rt){await st({language:rt.dataset.setLang});return}const Mt=t.target.closest("[data-set-pmode]");if(Mt){await st({pricingMode:Mt.dataset.setPmode});return}const xt=t.target.closest("[data-set-warn]");if(xt){await st({contextWarnPercent:Number(xt.dataset.setWarn)});return}if(t.target.closest("#btn-save-rates")){const w={};let et=!1;if(v.querySelectorAll("tr[data-rate-model]").forEach(tt=>{const Tt=tt.dataset.rateModel,lt=tt.querySelector('[data-field="input"]').value.trim(),ht=tt.querySelector('[data-field="cache"]').value.trim(),$t=tt.querySelector('[data-field="output"]').value.trim();if(!lt||!ht||!$t){et=!0;return}const Z=Number(lt),ot=Number(ht),bt=Number($t);if(![Z,ot,bt].every(K=>Number.isFinite(K)&&K>=0&&K<=1e3)){et=!0;return}const r=tt.dataset.custom==="1",W=Math.abs(Z-Number(tt.dataset.origInput))>1e-9||Math.abs(ot-Number(tt.dataset.origCache))>1e-9||Math.abs(bt-Number(tt.dataset.origOutput))>1e-9;(r||W)&&(w[Tt]={input:Z,cache:ot,output:bt})}),et){e.error=h().invalidRate,x();return}await st({customRates:w});return}if(t.target.closest("#btn-reset-settings"))try{const w=await g("/api/settings/reset",{});e.settings=w.settings,e.catalog=w.catalog,e.sessionRev=0,e.error="",kt(h().saved),x()}catch(w){e.error=w.message,x()}}),v.addEventListener("change",async t=>{t.target.id==="usage-model"?(e.usageModel=t.target.value,await D()):t.target.id==="log-conv"?(e.usageConv=t.target.value,await D({logOnly:!0})):t.target.id==="export-turn"?e.exportTurn=t.target.value:t.target.id==="set-ctx-limit"?await st({contextLimitOverride:Number(t.target.value)}):t.target.id==="set-budget-daily"?await st({dailyBudgetUsd:Number(t.target.value)||0}):t.target.id==="set-budget-weekly"&&await st({weeklyBudgetUsd:Number(t.target.value)||0})}),v.addEventListener("focusout",()=>{setTimeout(S,0)}),document.addEventListener("click",t=>{e.pickerOpen&&!t.target.closest("#session-combo")&&(e.pickerOpen=!1,x(),S())}),v.addEventListener("input",t=>{if(t.target.id==="search-input")e.searchQuery=t.target.value,clearTimeout(at),at=setTimeout(()=>{z()},220);else if(t.target.id==="log-search"){e.logQuery=t.target.value;const s=document.getElementById("req-log-list");s&&e.usage&&(s.innerHTML=n(e.usage,h())),clearTimeout(U),U=setTimeout(()=>{D({logOnly:!0})},260)}}),v.addEventListener("pointermove",t=>{const s=t.target.closest("[data-tip]");if(!s){k.hidden=!0;return}k.textContent=s.dataset.tip,k.hidden=!1;const a=Math.min(window.innerWidth-k.offsetWidth-8,t.clientX+10),o=Math.max(8,t.clientY-k.offsetHeight-10);k.style.left=`${Math.max(8,a)}px`,k.style.top=`${o}px`}),v.addEventListener("pointerleave",()=>{k.hidden=!0}),window.addEventListener("keydown",t=>{if(e.pickerOpen){if(t.key==="Escape"){t.preventDefault(),e.pickerOpen=!1,x(),document.getElementById("session-picker-btn")?.focus(),S();return}if(t.key==="ArrowDown"||t.key==="ArrowUp"){const s=[...document.querySelectorAll("#session-picker-menu .combo-item")];if(s.length){t.preventDefault();const a=s.indexOf(document.activeElement),o=a<0?0:(a+(t.key==="ArrowDown"?1:-1)+s.length)%s.length;s[o].focus()}return}}t.key==="/"&&!["INPUT","TEXTAREA","SELECT"].includes(document.activeElement?.tagName)&&(t.preventDefault(),e.tab="search",e.pickerOpen=!1,x(),document.getElementById("search-input")?.focus())}),window.addEventListener("agy-lens-select-conversation",t=>{const s=t.detail?.conversationId;s&&(f(s),e.tab="session",q())});async function wt(){A(),x();try{const s=await g("/api/bootstrap",{});e.settings=s.settings||e.settings,e.catalog=s.catalog||[],e.pricingMeta=s.pricingMeta||e.pricingMeta}catch(s){e.error=s.message}const t=new URLSearchParams(window.location.search).get("tab");["session","usage","search","config"].includes(t)&&(e.tab=t),await q(),e.tab==="usage"?await D():e.tab==="config"&&x(),setInterval(()=>{e.tab==="session"&&!document.hidden&&q({silent:!0})},4e3),setInterval(()=>{const s=document.getElementById("ttl-pill");if(!s||e.tab!=="session"||document.hidden)return;const a=Number(s.dataset.reqMs),o=Number(s.dataset.ttlMs)||3e5,c=Y(a,o);if(!c)return;s.classList.toggle("is-warm",c.warm),s.classList.toggle("is-cold",!c.warm);const F=s.querySelector("span");F&&F.textContent!==c.label&&(F.textContent=c.label)},1e3)}window.addEventListener("error",t=>{e.error=t?.message||"UI error",x()}),wt()})();
