<script lang="ts">
  // ------- Inputs (baseline) -------
  let visitors = $state(200); // monthly sessions
  let conversions = $state(20); // monthly conversions
  let avgValue = $state(400); // $ per conversion (LTV or AOV)

  // ------- Uplift sliders -------
  let trafficUpliftPct = $state(100); // %
  let crUpliftPct = $state(100); // %

  // ------- Helpers -------
  const fmtInt = (n: number) => new Intl.NumberFormat().format(Math.round(n));
  const fmtPct = (n: number) => (isFinite(n) ? (n * 100).toFixed(2) : '0.00') + '%';
  const fmtMoney = (n: number) =>
    new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(isFinite(n) ? n : 0);

  // ------- Derived (baseline) -------
  let baselineCR = $derived(visitors > 0 ? conversions / visitors : 0); // 0..1
  let baselineRevenue = $derived(conversions * avgValue); // monthly

  // ------- Derived (projected) -------
  let projectedVisitors = $derived(visitors * (1 + trafficUpliftPct / 100));
  let projectedCR = $derived(baselineCR * (1 + crUpliftPct / 100));
  let projectedConversions = $derived(projectedVisitors * projectedCR);
  let projectedRevenue = $derived(projectedConversions * avgValue); // monthly

  // ------- Lift -------
  let extraVisitors = $derived(projectedVisitors - visitors);
  let extraConversions = $derived(projectedConversions - conversions);
  let revenueLiftMonthly = $derived(projectedRevenue - baselineRevenue);

  // ------- Pricing model: 10–15% of ANNUAL revenue lift -------
  let revenueLiftAnnual = $derived(revenueLiftMonthly * 12);
  let costLow = $derived(Math.max(0, revenueLiftAnnual * 0.1));
  let costHigh = $derived(Math.max(0, revenueLiftAnnual * 0.15));
  let costMid = $derived((costLow + costHigh) / 2);

  // ------- ROI & Payback (12‑month horizon for ROI) -------
  // ROI = (Gain - Cost) / Cost, where Gain = annual lift
  let roiLow = $derived(costHigh > 0 ? (revenueLiftAnnual - costHigh) / costHigh : NaN); // worst ROI (higher cost)
  let roiHigh = $derived(costLow > 0 ? (revenueLiftAnnual - costLow) / costLow : NaN); // best ROI (lower cost)

  // Payback in months using monthly lift vs mid cost
  let paybackMonths = $derived(revenueLiftMonthly > 0 ? costMid / revenueLiftMonthly : Infinity);
</script>

<div class="app">
  <div class="grid">
    <!-- Inputs -->
    <div class="card">
      <h2>Baseline Inputs</h2>

      <div class="row">
        <label
          >Monthly visitors
          <input type="number" min="0" bind:value={visitors} />
        </label>
      </div>

      <div class="row">
        <label
          >Monthly conversions
          <input type="number" min="0" bind:value={conversions} />
        </label>
      </div>

      <div class="row">
        <label
          >Avg value per conversion
          <input type="number" min="0" step="1" bind:value={avgValue} />
        </label>
      </div>

      <div style="display: flex; justify-content: space-between;">
        <div style="margin-top:1.1rem">
          <div class="pill">Current conversion rate: {fmtPct(baselineCR)}</div>
        </div>

        <div style="margin-top:1.1rem">
          <div class="pill">Current estimated revenue: ${baselineRevenue}</div>
        </div>
      </div>

      <h2 style="margin-top:1.2rem">Assumed Uplifts</h2>

      <div class="row">
        <span>Traffic increase</span>
        <div class="pill">From {fmtInt(visitors)} → {fmtInt(projectedVisitors)}</div>
      </div>
      <div class="slider">
        <input type="range" min="25" max="200" step="1" bind:value={trafficUpliftPct} />
        <div><strong>{trafficUpliftPct}%</strong></div>
      </div>

      <div class="row">
        <span>Conversion rate increase</span>
        <div class="pill">From {fmtPct(baselineCR)} → {fmtPct(projectedCR)}</div>
      </div>
      <div class="slider">
        <input type="range" min="25" max="200" step="1" bind:value={crUpliftPct} />
        <div><strong>{crUpliftPct}%</strong></div>
      </div>
    </div>

    <!-- Results -->
    <div class="card">
      <h2>Projected Outcomes</h2>

      <div class="kpiGrid">
        <div class="kpi">
          <div class="label">Current revenue</div>
          <div class="value">{fmtMoney(baselineRevenue)} /mo</div>
          <div class="value">{fmtMoney(baselineRevenue * 12)} /yr</div>
        </div>
        <div class="kpi">
          <div class="label">Projected conversions</div>
          <div class="value big">{fmtInt(projectedConversions)}/mo</div>
          <div class="delta">+{fmtInt(extraConversions)} more than current</div>
          <div class="value big">{fmtInt(projectedConversions * 12)}/yr</div>
          <div class="delta">+{fmtInt(extraConversions * 12)} more than current</div>
        </div>
        <div class="kpi">
          <div class="label">Projected revenue</div>
          <div class="value big">{fmtMoney(projectedRevenue)}</div>
          <div class="delta">+{fmtMoney(revenueLiftMonthly)} / mo</div>
          <div class="value big">{fmtMoney(projectedRevenue * 12)}</div>
          <div class="delta">+{fmtMoney(revenueLiftMonthly * 12)} / yr</div>
        </div>
      </div>

      <h2 style="margin-top:1rem">Pricing & ROI</h2>
      <div class="kpiGrid">
        <div class="kpi">
          <div class="label">Estimated project cost</div>
          <div class="value range">{fmtMoney(costLow)} – {fmtMoney(costHigh)}</div>
          <div class="footnote">for +{fmtMoney(revenueLiftAnnual)}/yr for your revenue</div>
        </div>

        <div class="kpi">
          <div class="label">ROI over 12 months</div>
          <div class="value">
            {isNaN(roiLow) || isNaN(roiHigh)
              ? '—'
              : `${(roiLow * 100).toFixed(0)}% – ${(roiHigh * 100).toFixed(0)}%`}
          </div>
          <div class="footnote">=(Annual lift − Cost) / Cost</div>
        </div>

        <div class="kpi">
          <div class="label">Payback period (midpoint cost)</div>
          <div class="value {paybackMonths === Infinity ? 'warn' : ''}">
            {revenueLiftMonthly <= 0
              ? '—'
              : paybackMonths === Infinity
                ? 'No payback at current assumptions'
                : `${paybackMonths.toFixed(1)} months`}
          </div>
          <div class="footnote">Uses midpoint cost: {fmtMoney(costMid)}</div>
        </div>
      </div>
    </div>
  </div>
</div>
