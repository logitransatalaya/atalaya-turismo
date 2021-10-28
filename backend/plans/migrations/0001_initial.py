# Generated by Django 3.2.8 on 2021-10-28 15:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Plan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('destination_name', models.CharField(max_length=250)),
                ('description', models.CharField(max_length=255)),
                ('url_img_card', models.URLField(max_length=250)),
            ],
        ),
        migrations.CreateModel(
            name='PhotosPlans',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_img', models.CharField(max_length=255)),
                ('url_img', models.URLField(max_length=255)),
                ('plan', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='photos', to='plans.plan')),
            ],
        ),
        migrations.CreateModel(
            name='Notes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('note', models.CharField(max_length=255)),
                ('plan', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='notes', to='plans.plan')),
            ],
        ),
        migrations.CreateModel(
            name='NoInclude',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('noIncludes_description', models.CharField(max_length=255)),
                ('plan', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='noIncludes', to='plans.plan')),
            ],
        ),
        migrations.CreateModel(
            name='IncludesPlan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('includes_description', models.CharField(max_length=255)),
                ('plan', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='includes', to='plans.plan')),
            ],
        ),
    ]