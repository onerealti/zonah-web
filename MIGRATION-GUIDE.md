# Legacy Content Migration Guide

## Overview

This migration extracted **17 unique projects** from the legacy Zonah Developers website:
- **9 Residential projects**
- **6 Commercial projects**  
- **2 Land Development projects**

All project data, images, and content have been extracted and cleaned.

---

## 📁 Generated Files

### Data Files
- `migrated-data/projects.json` - Raw extracted data (32 projects before deduplication)
- `migrated-data/cleaned-projects.json` - Cleaned and enhanced data (17 unique projects)
- `migrated-data/cleaned-sanity-import.ndjson` - Ready for Sanity import
- `migrated-data/summary.json` - Migration statistics

### Images
- `public/legacy-images/` - 190 images copied from the legacy website

---

## 🎯 What Was Extracted

For each project, the migration extracted:

✅ **Basic Info**
- Title
- Slug (URL-friendly)
- Segment (residential/commercial/land-development)
- Status (ongoing/completed/upcoming)

✅ **Location**
- City (default: Hyderabad)
- Sub-location (extracted from descriptions)
- Full address

✅ **Details**
- Description paragraphs
- Project highlights
- Property type
- Bedrooms (e.g., "2, 3 BHK")
- Area/Size (extracted from text)
- Price range (estimated)

✅ **Amenities**
- Extracted from highlights
- Mapped to icon types (gym, pool, security, play, garden, etc.)

✅ **Images**
- Filtered out UI elements
- Only project-specific images included

---

## 🚀 Uploading to Sanity

### Option 1: Automated Upload (Recommended)

#### Step 1: Get a Sanity Write Token

1. Go to https://www.sanity.io/manage
2. Select your project: **j6dtunal** (Zonah Developers)
3. Navigate to **API** → **Tokens**
4. Click **Add API token**
5. Settings:
   - **Name**: `Migration Script`
   - **Permissions**: `Editor`
6. Copy the generated token

#### Step 2: Add Token to Environment

Add to your `.env.local` file:

```env
SANITY_WRITE_TOKEN=your_token_here
```

#### Step 3: Run Upload Script

```bash
node upload-to-sanity.js
```

This will:
- Upload all 17 projects to Sanity
- Upload main project images
- Create proper document references
- Handle errors gracefully with retry logic

---

### Option 2: Manual Import via Sanity CLI

If you prefer manual import:

#### Step 1: Install Sanity CLI

```bash
npm install -g @sanity/cli
```

#### Step 2: Import Data

```bash
sanity dataset import migrated-data/cleaned-sanity-import.ndjson production
```

#### Step 3: Upload Images Manually

Images in `public/legacy-images/` need to be uploaded through:
- Sanity Studio UI (`/studio` route)
- Or programmatically via the script above

---

## 📊 Project Data Summary

### Residential Projects (9)
1. **Noble Apartments** - Completed, Ameerpet, 3 BHK
2. **Fort View** - Completed, MLA Colony, 1000 sq.ft.
3. **Pristine Homes** - Completed, 3700 sq.ft. villas
4. **Zonah Star** - Completed, 2-3 BHK, 800-1300 sq.ft.
5. **Zonah Mars** - Completed
6. **Tree Tops** - Completed
7. **Bounty Homes** - Completed
8. **Row Houses** - Completed
9. **Private Home/Villa** - Completed

### Commercial Projects (6)
1. **Zonah Crescent** - Ongoing
2. **Paradise Pearl** - Completed
3. **Zonah Neptune** - Completed
4. *+ 3 more commercial projects*

### Land Development (2)
1. **Pearl Valley**
2. **Ruby Enclave**

---

## 🖼️ Image Handling

### Current State
- 190 images copied to `public/legacy-images/`
- Images are referenced in project data
- UI elements filtered out (logos, navigation, etc.)

### For Production
You have two options:

**Option A: Use Local Images**
- Images already in `public/legacy-images/`
- Update Sanity documents to reference local image URLs
- Faster, no additional upload needed

**Option B: Upload to Sanity Assets**
- Use the upload script (automatically uploads main images)
- Better for CMS management
- Sanity handles image optimization and CDN

---

## 🔧 Scripts Reference

### Migration Scripts

```bash
# Extract data from HTML files
node migrate-legacy-content.js

# Clean and enhance extracted data
node clean-migrated-data.js

# Upload to Sanity (requires SANITY_WRITE_TOKEN)
node upload-to-sanity.js
```

### Configuration

All scripts use these environment variables:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` (already set: j6dtunal)
- `NEXT_PUBLIC_SANITY_DATASET` (already set: production)
- `SANITY_WRITE_TOKEN` (required for upload)

---

## ⚠️ Important Notes

### Data Quality
- **Locations**: Most projects default to Hyderabad (verify and update as needed)
- **Price Ranges**: Estimated based on BHK configuration (update with actual prices)
- **Images**: Main images selected automatically (first non-UI image)
- **Amenities**: Mapped from highlights (some may need manual categorization)

### After Upload
1. **Review Projects in Studio** (`/studio` route)
2. **Verify Data Accuracy**:
   - Check locations and sub-locations
   - Verify price ranges
   - Confirm bedroom configurations
   - Review amenity icons
3. **Add Missing Data**:
   - Floor plans (PDFs in `Brochures/` folder)
   - RERA numbers
   - Possession dates
   - Budget ranges
4. **Upload Additional Images**:
   - Gallery images
   - Floor plan diagrams
   - Location maps

### Brochures & PDFs
These were found but not yet imported:
- `Crescent Floor Plan.pdf`
- `fort view floor plan.pdf`
- `MARS Floor Plan.pdf`
- `Pristine Homes Brochure.pdf`
- `Pearl Valley Layout.pdf`
- `RYK_FloorPlan.pdf`

Upload these manually through Sanity Studio as needed.

---

## 🎉 Next Steps

1. ✅ **Review cleaned data** in `cleaned-projects.json`
2. ⏳ **Get Sanity write token** (if not already done)
3. ⏳ **Run upload script** to populate Sanity
4. ⏳ **Verify in Sanity Studio** (`/studio` route)
5. ⏳ **Enhance data** (prices, locations, additional images)
6. ⏳ **Test on website** (visit `/projects` to see the imported projects)

---

## 📞 Troubleshooting

### Upload Fails
- **Check token**: Ensure `SANITY_WRITE_TOKEN` is set and valid
- **Check permissions**: Token needs "Editor" permissions
- **Rate limiting**: Script includes 500ms delay between uploads

### Images Not Showing
- **Local**: Images are in `public/legacy-images/` folder
- **Sanity**: Upload script only uploads main image (others need manual upload)
- **Paths**: Check image references match actual filenames

### Duplicate Projects
- Cleaning script removes duplicates by slug
- If you see duplicates in Sanity, delete via Studio UI

---

## 📝 Data Transformation Details

The cleaning script performed:
- ✅ Filtered out 190 UI/navigation images
- ✅ Extracted amenities with icon types
- ✅ Parsed bedroom configurations (BHK)
- ✅ Extracted area/size from descriptions
- ✅ Generated price range estimates
- ✅ Normalized city names (Hyderabad default)
- ✅ Created URL-friendly slugs
- ✅ Removed duplicate entries (32 → 17 projects)
- ✅ Filtered out generic project list pages

---

## 🔗 Useful Links

- **Sanity Management**: https://www.sanity.io/manage
- **Project Dashboard**: https://www.sanity.io/manage/personal/project/j6dtunal
- **Studio**: http://localhost:3000/studio (local dev)
- **API Docs**: https://www.sanity.io/docs/http-api

---

**Migration completed successfully! 🎉**

All legacy content has been extracted, cleaned, and is ready for upload to Sanity CMS.
